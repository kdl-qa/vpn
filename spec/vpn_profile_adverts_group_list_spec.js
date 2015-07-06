require('./boot');
frisby.create('Get Profile Adverts Group Lists')
    .addHeader('token', userToken)
    .get(URL_profiles_adverts_group_lists)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .toss()