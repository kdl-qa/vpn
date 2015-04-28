require('./boot');
frisby.create('Get near objects')
    .get(URL_near_objects)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([
        {name: 'Остановка общественного транспорта'}
        //{name: 'Детские сады и ясли'},
        //{name: 'Школы, лицеи, гимназии'},
        //{name: 'Парки отдыха, сады'},
        //{name: 'Спортивно-развлекательные центры'},
        //{name: 'Магазины, торговые центры'},
        //{name: 'Кафе и рестораны'},
        //{name: 'Развлекательные заведения'},
        //{name: 'Речка, озеро'},
        //{name: 'Лес'}
    ])
    .toss()