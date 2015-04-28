require('./boot');
frisby.create('Get operation types')
    .get(URL_operation_types)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([
        {name: 'Аренда'}
        //{name: 'Продажа'}
    ])
    .toss()