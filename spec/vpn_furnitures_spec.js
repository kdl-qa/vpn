require('./boot');
frisby.create('Get furnitures')
    .get(URL_furnitures)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([
        {name: 'Меблированная кухня'}
        //{name: 'Кухонный уголок'},
        //{name: 'Барная стойка'},
        //{name: 'Диван / мягкий уголок'},
        //{name: 'Кровать'},
        //{name: 'Шкаф'},
        //{name: 'Встроенный шкаф-гардероб'},
        //{name: 'Сейф'}
    ])
    .toss()