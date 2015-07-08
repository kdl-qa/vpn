require('./boot');
frisby.create('Admin - Get User Statistics')
    .addHeader('token', adminToken)
    .get(URL_user_statistics)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        active: Object,
        notActive: Object
    })
    .toss()