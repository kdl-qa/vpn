require('./boot');
frisby.create('Get Advert Group List')
    .addHeader('token', userToken)
    .put(URL_adverts_group_lists_update_interesting)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .toss()