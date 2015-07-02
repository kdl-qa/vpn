require('./boot');
frisby.create('Get Advert Group List')
    .get(URL_adverts_group_lists)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        id: String,
        name: String,
        slug: String,
        title: String,
        count: Number,
        created: String,
        updated: String,
        user: Object,
        advert: Object
    })
    .toss()