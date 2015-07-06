require('./boot');
frisby.create('Admin - Get Adverts Statistics')
    .addHeader('token', adminToken)
    .get(URL_admin_realties_statistics)
    .inspectRequest()
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        active: Number,
        notActive: Number
    })
    .toss()