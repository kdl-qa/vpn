require('./boot');
frisby.create('Get User')
    //.addHeader('token', userToken)
    .addHeader('token', adminToken)
    .get(URL_get_user)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        id: String
    })
    .toss()