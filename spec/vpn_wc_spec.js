require('./boot');
frisby.create('Get WC')
    .get(URL_wc)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([
        {name: 'Раздельный'}
        //{name: 'Совмещенный'},
        //{name: 'Несколько санузлов'}
    ])
    .toss()