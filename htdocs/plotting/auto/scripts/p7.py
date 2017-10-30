"""GDD Fun"""
import datetime

import psycopg2.extras
import numpy as np
import pandas as pd
from pyiem import network
from pyiem.util import get_autoplot_context


def get_description():
    """ Return a dict describing how to call this plotter """
    desc = dict()
    desc['data'] = True
    desc['description'] = """This plot presents the period over which growing
    degree days were accumulated between the two thresholds provided by
    the user.  The colors represent the number of days for the period shown."""
    desc['arguments'] = [
        dict(type='station', name='station', default='IA0200',
             label='Select Station:', network='IACLIMATE'),
        dict(type='year', name='year', default=datetime.date.today().year,
             label='Select Year', min=1893),
        dict(type='int', name='gdd1', default='1135',
             label='Growing Degree Day Start'),
        dict(type='int', name='gdd2', default='1660',
             label='Growing Degree Day End'),
    ]
    return desc


def plotter(fdict):
    """ Go """
    import matplotlib
    matplotlib.use('agg')
    import matplotlib.pyplot as plt
    import matplotlib.dates as mdates
    import matplotlib.colors as mpcolors
    pgconn = psycopg2.connect(database='coop', host='iemdb', user='nobody')
    ccursor = pgconn.cursor(cursor_factory=psycopg2.extras.DictCursor)

    ctx = get_autoplot_context(fdict, get_description())
    station = ctx['station']
    year = ctx['year']
    gdd1 = ctx['gdd1']
    gdd2 = ctx['gdd2']
    table = "alldata_%s" % (station[:2],)
    nt = network.Table("%sCLIMATE" % (station[:2],))

    ccursor.execute("""
    SELECT day, gdd50(high,low) as gdd
    from """+table+""" WHERE year = %s and station = %s
    ORDER by day ASC
    """, (year, station))
    days = []
    gdds = []
    for row in ccursor:
        gdds.append(float(row['gdd']))
        days.append(row['day'])

    yticks = []
    yticklabels = []
    jan1 = datetime.datetime(year, 1, 1)
    for i in range(110, 330):
        ts = jan1 + datetime.timedelta(days=i)
        if ts.day == 1 or ts.day % 12 == 1:
            yticks.append(i)
            yticklabels.append(ts.strftime("%-d %b"))

    gdds = np.array(gdds)
    sts = datetime.datetime(year, 4, 1)
    ets = datetime.datetime(year, 6, 1)
    now = sts
    sz = len(gdds)

    days2 = []
    starts = []
    heights = []
    success = []
    rows = []
    while now < ets:
        idx = int(now.strftime("%j")) - 1
        running = 0
        while idx < sz and running < gdd1:
            running += gdds[idx]
            idx += 1
        idx0 = idx
        while idx < sz and running < gdd2:
            running += gdds[idx]
            idx += 1
        success.append(running >= gdd2)
        idx1 = idx
        days2.append(now)
        starts.append(idx0)
        heights.append(idx1 - idx0)
        rows.append(dict(plant_date=now, start_doy=idx0, end_doy=idx1,
                         success=success[-1]))
        now += datetime.timedelta(days=1)

    if True not in success:
        return "No data, pick lower GDD values"
    df = pd.DataFrame(rows)
    heights = np.array(heights)
    success = np.array(success)
    starts = np.array(starts)

    cmap = plt.get_cmap('jet')
    bmin = min(heights[success]) - 1
    bmax = max(heights[success]) + 1
    bins = np.arange(bmin, bmax+1.1)
    norm = mpcolors.BoundaryNorm(bins, cmap.N)

    ax = plt.axes([0.125, 0.125, 0.75, 0.75])
    bars = ax.bar(days2, heights, bottom=starts, fc='#EEEEEE')
    for i, mybar in enumerate(bars):
        if success[i]:
            mybar.set_facecolor(cmap(norm([heights[i]])[0]))
    ax.grid(True)
    ax.set_yticks(yticks)
    ax.set_yticklabels(yticklabels)

    ax.set_ylim(min(starts)-7, max(starts+heights)+7)

    ax.xaxis.set_major_formatter(mdates.DateFormatter('%-d\n%b'))
    ax.set_xlabel("Planting Date")
    ax.set_title(("%s [%s] %s GDD [base=50,ceil=86]\n"
                  "Period between GDD %s and %s, gray bars incomplete"
                  ) % (nt.sts[station]['name'], station, year, gdd1, gdd2))

    ax2 = plt.axes([0.92, 0.1, 0.07, 0.8], frameon=False,
                   yticks=[], xticks=[])
    ax2.set_xlabel("Days")
    for i, mybin in enumerate(bins):
        ax2.text(0.52, i, "%g" % (mybin,), ha='left', va='center',
                          color='k')
        # txt.set_path_effects([PathEffects.withStroke(linewidth=2,
        #                                             foreground="k")])
    ax2.barh(np.arange(len(bins[:-1])), [0.5]*len(bins[:-1]), height=1,
             color=cmap(norm(bins[:-1])),
             ec='None')
    ax2.set_xlim(0, 1)

    return plt.gcf(), df


if __name__ == '__main__':
    plotter(dict())
