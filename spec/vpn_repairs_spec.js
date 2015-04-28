require('./boot');
frisby.create('Get repairs')
    .get(URL_repairs)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([
        {name: 'Косметический'}
        //{name: 'Евроремонт'},
        //{name: 'Дизайнерский'},
        //{name: 'После строителей'},
        //{name: 'Под чистовую отделку'},
        //{name: 'Неоконченный ремонт'},
        //{name: 'Требуется косметический ремонт'},
        //{name: 'Требуется капитальный ремонт'}
    ])
    .toss()