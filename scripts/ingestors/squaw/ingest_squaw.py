"""Process the Flow data provided by the USGS website"""
from __future__ import print_function
import re

import requests
from pyiem.util import get_dbconn


def main():
    """Squaw"""
    mydb = get_dbconn("squaw")
    cursor = mydb.cursor()

    uri = ("http://waterdata.usgs.gov/ia/nwis/uv?dd_cd=01&format=rdb&"
           "period=2&site_no=05470500")

    data = requests.get(uri, timeout=30).text

    tokens = re.findall(
        "USGS\t([0-9]*)\t(....-..-.. ..:..)\t([CSDT]+)\t([0-9]*)", data)

    for ob in tokens:
        sql = "SELECT * from real_flow WHERE valid = '%s'" % (ob[1], )
        cursor.execute(sql)
        if cursor.rowcount > 0:
            continue
        if ob[3] != '':
            sql = """
                INSERT into real_flow(gauge_id, valid, cfs)
                VALUES (%s, '%s', %s)
            """ % (ob[0], ob[1], ob[3])
            cursor.execute(sql)

    cursor.close()
    mydb.commit()
    mydb.close()


if __name__ == '__main__':
    main()
