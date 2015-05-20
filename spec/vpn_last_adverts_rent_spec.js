require('./boot');
frisby.create('Get last Adverts (rent)')
    .get(URL_last_adverts+operationTypeRent)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        total: Number,
        count: Number,
        page: Number,
        data: [{
            id: String,
            title: String
        }]
    })
    .toss()