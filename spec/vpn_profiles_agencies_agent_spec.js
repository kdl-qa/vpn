require('./boot');
frisby.create('Get Agents of Agency')
    .addHeader('token', agencyToken)
    .get(URL_profiles_agencies_agents)
    .inspectRequest()
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        total: Number,
        count: Number,
        page: Number,
        data: Array
    })
    .toss()