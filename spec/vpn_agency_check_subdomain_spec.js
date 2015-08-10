require('./boot');
frisby.create('Admin - Check Agency Subdomain')
    .addHeader('token', adminToken)
    .get(URL_agency_check_subdomain +
    'test-subdomain')
    .inspectRequest()
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .toss()