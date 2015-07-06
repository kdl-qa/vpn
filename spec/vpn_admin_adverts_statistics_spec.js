require('./boot');
frisby.create('Admin - Get Adverts Statistics')
    .addHeader('token', adminToken)
    .get(URL_admin_adverts_statistics)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        preModeration: Number,
        declined: Number,
        forUnpublished: Number,
        unpublished: Number
    })
    .toss()