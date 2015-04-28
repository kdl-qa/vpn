require('./boot');
frisby.create('Get Additionals')
    .get(URL_additionals_0)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([{
        id: String,
        name: String
    }])
    .expectBodyContains('Лифт')
    .toss()
