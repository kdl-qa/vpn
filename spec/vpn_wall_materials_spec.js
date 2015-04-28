require('./boot');
frisby.create('Get wall materials')
    .get(URL_wall_materials)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([
        {name: 'Кирпич'}
        //{name: 'Панель'},
        //{name: 'Монолит'},
        //{name: 'Пеноблок'},
        //{name: 'Поротерм (кератерм)'},
        //{name: 'Силикатный кирпич'},
        //{name: 'Монолитно-кирпичный'},
        //{name: 'Монолитно-блочный'},
        //{name: 'Газобетон'},
        //{name: 'Ракушечник'},
        //{name: 'Дерево и кирпич'}
    ])
    .toss()