#!/usr/bin/env python

from pancloud import LoggingService, Credentials
from math import floor
from time import time
from json import dumps, loads

ls = LoggingService(
    url="https://api.us.paloaltonetworks.com",
    credentials=Credentials()
)

q = ls.query({
    "query": "select dst, app, misc, name-of-threatid from panw.threat where subtype='wildfire-virus' limit 5",
    "startTime": 0,  # 1970
    "endTime": floor(time()),  # now
    "maxWaitTime": 30000
})

print(dumps(loads(q.text), indent=4, sort_keys=True))
