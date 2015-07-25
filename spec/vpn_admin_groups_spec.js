require('./boot');
frisby.create('Get Info Pages')
    .addHeader('token', adminToken)
    .get(URL_admin_groups_list)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        total: Number,
        count: Number,
        page: Number
    })
    .toss()