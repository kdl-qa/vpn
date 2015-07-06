require('./boot');
frisby.create('Get Profile Adverts Group Lists')
    .addHeader('token', userToken)
    .get(URL_profiles_list_adverts+'?text=please')
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