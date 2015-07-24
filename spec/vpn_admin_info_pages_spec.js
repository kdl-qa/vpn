require('./boot');
frisby.create('Get Info Pages')
    .addHeader('token', adminToken)
    .get(URL_info_pages)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        total: Number,
        data: Array
    })
    .toss()