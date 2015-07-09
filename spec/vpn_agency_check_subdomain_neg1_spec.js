require('./boot');
frisby.create('Admin - Check Agency Subdomain')
    .addHeader('token', adminToken)
    .get(URL_agency_check_subdomain + agencySubdomain)
    .inspectRequest()
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(400)
    .expectJSONTypes({
        errors: [
            [ 'subdomain_exists' ]
        ]
    })
    .toss()