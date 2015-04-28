require('./boot');
frisby.create('Get Additionals')
    .get(URL_additionals_1)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([{
        id: String,
        name: String
    }])
    .expectBodyContains('Участок правильной формы')
    .toss()