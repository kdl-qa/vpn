require('./boot');
frisby.create('Get water heatings')
    .get(URL_water_heatings)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([
        {name: 'Нет'}
        //{name: 'Централизованный'},
        //{name: 'Бойлер'},
        //{name: 'Газовая колонка'},
        //{name: 'Комбинированный'}
    ])
    .toss()