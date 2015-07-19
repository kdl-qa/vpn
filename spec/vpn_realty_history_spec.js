require('./boot');
frisby.create('Get Realty History')
    //.addHeader('token', userToken)
    .addHeader('token', adminToken)
    .get(URL_realty_history)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        data: Array
    })
    .toss()