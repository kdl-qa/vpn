require('./boot');
frisby.create('Get Admin - logs (sort)')
    .addHeader('token', adminToken)
    .get(URL_admin_logs +      //
    //'?dateFrom=2015-07-13'
    '?endpoint=/api/v1/logs')
    //'&dateTo=2015-07-17'+)
    //.inspectRequest()
    .inspectHeaders()
    .inspectJSON()
    //.inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        total: Number,
        count: Number,
        page: Number,
        data: Array
    })          //Only in positive case
    .toss()