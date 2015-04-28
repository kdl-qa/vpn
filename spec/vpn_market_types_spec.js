require('./boot');
frisby.create('Get market types')
    .get(URL_market_types)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([
        {name: 'Первичный'}
        //{name: 'Вторичный'}
    ])
    .toss()