require('./boot');
frisby.create('Agency Subdomain Employees')
    //.addHeader('token', agencyToken)
    .get(URL_agency_subdomain_employees)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        manager: Object,
        employees: Array
    })
    .toss()
