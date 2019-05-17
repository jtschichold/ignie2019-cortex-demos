const pancloud = require('pancloud');
pancloud.autoCredentials()
    .then(credentials => pancloud.LoggingService.factory(credentials))
    .then(loggingService => loggingService.query({
        query: "select dst, app, misc, name-of-threatid from panw.threat where subtype='wildfire-virus' limit 5",
        startTime: 0, // 1970
        endTime: Math.floor(Date.now()/1000), // now
        maxWaitTime: 30000 // wait up to 30 seconds for the query to complete
    }))
    .then(jobResult => console.log(JSON.stringify(jobResult, undefined, ' ')))
