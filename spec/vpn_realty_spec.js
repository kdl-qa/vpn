require('./boot');
frisby.create('Get Realty')
    //.addHeader('token', userToken)
    .addHeader('token', adminToken)
    .get(URL_realty)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        id: String
    })
    .toss()