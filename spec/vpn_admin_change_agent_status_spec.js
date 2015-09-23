require('./boot');
frisby.create('PUT - Change status')
    .addHeader('token', adminToken)
    .put(URL_admin_change_status_agent, {}, {'json': true})
    .inspectJSON()
    //.inspectResponse()
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({status: Boolean})
    .toss()