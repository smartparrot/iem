var iemdata = {};

iemdata.vtec_phenomena_dict = [
['SV','Severe Thunderstorm'],
['TO','Tornado'],
['MA','Marine'],
['AF','Volcanic Ashfall'],
['AS','Air Stagnation'],
['AV','Avalanche'],
['BH','Beach Hazard'],
['BS','Blowing Snow'],
['BZ','Blizzard'],
['CF','Coastal Flood'],
['DU','Blowing Dust'],
['DS','Dust Storm'],
['EC','Extreme Cold'],
['EH','Excessive Heat'],
['EW','Extreme Wind'],
['FA','Areal Flood'],
['FF','Flash Flood'],
['FL','Flood'],
['FR','Frost'],
['FZ','Freeze'],
['FG','Dense Fog'],
['FW','Red Flag'],
['GL','Gale'],
['HF','Hurricane Force Wind'],
['HI','Inland Hurricane Wind'],
['HS','Heavy Snow'],
['HP','Heavy Sleet'],
['HT','Heat'],
['HU','Hurricane'],
['HW','High Wind'],
['HY','Hydrologic'],
['HZ','Hard Freeze'],
['IS','Ice Storm'],
['IP','Sleet'],
['LB','Lake Effect Snow and Blowing Snow'],
['LE','Lake Effect Snow'],
['LO','Low Water'],
['LS','Lakeshore Flood'],
['LW','Lake Wind'],
['RB','Small Craft for Rough Bar'],
['RH','Radiological Hazard'],
['SB','Snow and Blowing Snow'],
['SC','Small Craft'],
['SE','Hazardous Seas'],
['SI','Small Craft for Winds'],
['SM','Dense Smoke'],
['SN','Snow'],
['SQ','Snow Squall'],
['SR','Storm'],
['SU','High Surf'],
['TI','Inland Tropical Storm Wind'],
['TR','Tropical Storm'],
['TS','Tsunami'],
['TY','Typhoon'],
['UP','Ice Accretion'],
['VO','Volcano'],
['WC','Wind Chill'],
['WI','Wind'],
['WS','Winter Storm'],
['WW','Winter Weather'],
['ZF','Freezing Fog'],
['ZR','Freezing Rain']
];


iemdata.vtec_sig_dict = [
['W','Warning'],
['Y','Advisory'],
['A','Watch'],
['S','Statement'],
['F','Forecast'],
['O','Outlook'],
['N','Synopsis']
];

iemdata.wfos = [
 ['KABQ','ALBUQUERQUE'],
 ['KABR','ABERDEEN'],
 ['PAFC','ANCHORAGE'],
 ['PAFG','FAIRBANKS'],
 ['PAJK','JUNEAU'],
 ['KAKQ','WAKEFIELD'],
 ['KALY','ALBANY'],
 ['KAMA','AMARILLO'],
 ['KAPX','GAYLORD'],
 ['KARX','LA_CROSSE'],
 ['KBGM','BINGHAMTON'],
 ['KBIS','BISMARCK'],
 ['KBMX','BIRMINGHAM'],
 ['KBOI','BOISE'],
 ['KBOU','DENVER'],
 ['KBOX','TAUNTON'],
 ['KBRO','BROWNSVILLE'],
 ['KBTV','BURLINGTON'],
 ['KBUF','BUFFALO'],
 ['KBYZ','BILLINGS'],
 ['KCAE','COLUMBIA'],
 ['KCAR','CARIBOU'],
 ['KCHS','CHARLESTON'],
 ['KCLE','CLEVELAND'],
 ['KCRP','CORPUS_CHRISTI'],
 ['KCTP','STATE_COLLEGE'],
 ['KCYS','CHEYENNE'],
 ['KDDC','DODGE_CITY'],
 ['KDLH','DULUTH'],
 ['KDMX','DES_MOINES'],
 ['KDTX','DETROIT'],
 ['KDVN','QUAD_CITIES_IA'],
 ['KEAX','KANSAS_CITY/PLEASANT_HILL'],
 ['KEKA','EUREKA'],
 ['KEPZ','EL_PASO_TX/SANTA_TERESA'],
 ['KEWX','AUSTIN/SAN_ANTONIO'],
 ['KEYW','KEY_WEST'],
 ['KFFC','PEACHTREE_CITY'],
 ['KFGF','EASTERN_NORTH_DAKOTA'],
 ['KFGZ','FLAGSTAFF'],
 ['KFSD','SIOUX_FALLS'],
 ['KFWD','DALLAS/FORT_WORTH'],
 ['KGGW','GLASGOW'],
 ['KGID','HASTINGS'],
 ['KGJT','GRAND_JUNCTION'],
 ['KGLD','GOODLAND'],
 ['KGRB','GREEN_BAY'],
 ['KGRR','GRAND_RAPIDS'],
 ['KGSP','GREENVILLE/SPARTANBURG'],
 ['PGUM','GUAM'],
 ['KGYX','GRAY'],
 ['PHFO','HONOLULU'],
 ['KHGX','HOUSTON/GALVESTON'],
 ['KHNX','SAN_JOAQUIN_VALLEY/HANFORD'],
 ['KHUN','HUNTSVILLE'],
 ['KICT','WICHITA'],
 ['KILM','WILMINGTON'],
 ['KILN','WILMINGTON'],
 ['KILX','LINCOLN'],
 ['KIND','INDIANAPOLIS'],
 ['KIWX','NORTHERN_INDIANA'],
 ['KJAN','JACKSON'],
 ['KJAX','JACKSONVILLE'],
 ['KJKL','JACKSON'],
 ['KLBF','NORTH_PLATTE'],
 ['KLCH','LAKE_CHARLES'],
 ['KLIX','NEW_ORLEANS'],
 ['KLKN','ELKO'],
 ['KLMK','LOUISVILLE'],
 ['KLOT','CHICAGO'],
 ['KLOX','LOS_ANGELES/OXNARD'],
 ['KLSX','ST_LOUIS'],
 ['KLUB','LUBBOCK'],
 ['KLWX','BALTIMORE_MD/_WASHINGTON_DC'],
 ['KLZK','LITTLE_ROCK'],
 ['KMAF','MIDLAND/ODESSA'],
 ['KMEG','MEMPHIS'],
 ['KMFL','MIAMI'],
 ['KMFR','MEDFORD'],
 ['KMHX','NEWPORT/MOREHEAD_CITY'],
 ['KMKX','MILWAUKEE/SULLIVAN'],
 ['KMLB','MELBOURNE'],
 ['KMOB','MOBILE'],
 ['KMPX','TWIN_CITIES/CHANHASSEN'],
 ['KMQT','MARQUETTE'],
 ['KMRX','MORRISTOWN'],
 ['KMSO','MISSOULA'],
 ['KMTR','SAN_FRANCISCO'],
 ['KOAX','OMAHA/VALLEY'],
 ['KOHX','NASHVILLE'],
 ['KOKX','NEW_YORK'],
 ['KOTX','SPOKANE'],
 ['KOUN','NORMAN'],
 ['KPAH','PADUCAH'],
 ['KPBZ','PITTSBURGH'],
 ['KPDT','PENDLETON'],
 ['KPHI','MOUNT_HOLLY'],
 ['KPIH','POCATELLO/IDAHO_FALLS'],
 ['KPQR','PORTLAND'],
 ['KPSR','PHOENIX'],
 ['KPUB','PUEBLO'],
 ['KRAH','RALEIGH'],
 ['KREV','RENO'],
 ['KRIW','RIVERTON'],
 ['KRLX','CHARLESTON'],
 ['KRNK','BLACKSBURG'],
 ['KSEW','SEATTLE'],
 ['KSGF','SPRINGFIELD'],
 ['KSGX','SAN_DIEGO'],
 ['KSHV','SHREVEPORT'],
 ['KSJT','SAN_ANGELO'],
 ['KSJU','SAN_JUAN'],
 ['KSLC','SALT_LAKE_CITY'],
 ['KSTO','SACRAMENTO'],
 ['KTAE','TALLAHASSEE'],
 ['KTBW','TAMPA_BAY_AREA/RUSKIN'],
 ['KTFX','GREAT_FALLS'],
 ['KTOP','TOPEKA'],
 ['KTSA','TULSA'],
 ['KTWC','TUCSON'],
 ['KUNR','RAPID_CITY'],
 ['KVEF','LAS_VEGAS']
];
