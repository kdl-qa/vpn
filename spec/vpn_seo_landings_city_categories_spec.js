require('./boot');
frisby.create('Get Landing page - Category of the City')
    .get(URL_seo_landings_city + '/' + catData[0].type)// 0,1,2,3 - different categories
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        city: Object,
        seo: Object,
        category: Array
    })
    .toss()