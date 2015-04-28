require('./boot');
frisby.create('Get Appliances')
    .get(URL_appliances)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([{
        id: String,
        name: String
    }])
    .expectBodyContains('Кондиционер')
    .toss()
