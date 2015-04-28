require('./boot');
frisby.create('Get communications')
    .get(URL_communications)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([
        {name : 'Електричество'}
    ])
    .toss()
