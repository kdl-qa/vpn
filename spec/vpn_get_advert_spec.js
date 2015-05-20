require('./boot');
frisby.create('Get Advert')
    .get(URL_get_advert+advertsFlatSaleId) //adverts Realty (Sale or Rent)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        id: String,
        title: String,
        description: String
    })
    .toss()