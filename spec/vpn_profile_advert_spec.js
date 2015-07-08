require('./boot');
frisby.create('Get Profile Advert')
    .addHeader('token', userToken)
    //.addHeader('token', adminToken)
    .get(URL_profiles_advert)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        id: String,
        price: Number
    })
    .toss()