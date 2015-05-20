require('./boot');
frisby.create('Get Advert')
    .get(URL_get_advert+advertsFlatRentId) //advertsRealty(Sale or Rent) id
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        id: String,
        title: String,
        description: String
    })
    .toss()