require('./boot');
frisby.create('Subdomain Agency Services')
    //.addHeader('token', agencyToken)
    .get(URL_agency_subdomain_services)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        service: Array,
        certificate: Array
    })
    .toss()
