require('./boot');
frisby.create('Get last Adverts (sell)')
    .get(URL_last_adverts+operationtypesId)
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