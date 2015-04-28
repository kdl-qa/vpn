require('./boot');
frisby.create('Get heatings')
    .get(URL_heatings)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([
        {name: 'Нет'}
        //{name: 'Централизованное'},
        //{name: 'Индивидуальное газовое'},
        //{name: 'Индивидуальное електрическое'},
        //{name: 'Автономная котельная'}
    ])
    .toss()