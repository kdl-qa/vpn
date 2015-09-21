require('./boot');
frisby.create('Get Advert Group List')
    .addHeader('token', userToken)
    .get(URL_adverts_group_lists)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        id: String,
        name: String,
        count: Number,
        created: String,
        updated: String,
        user: Object,
        adverts: Object
    })
    .toss()