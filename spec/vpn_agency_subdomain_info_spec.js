require('./boot');
frisby.create('Subdomain Info Agency')
    //.addHeader('token', agencyToken)
    .get(URL_agency_subdomain_info)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        name: String,
        profileHeader: String,
        description: String,
        firstName: String,
        lastName: String,
        email: String,
        userType: String,
        offices: Array,
        schedule: Array,
        socialAccounts: Array
    })
    .toss()
