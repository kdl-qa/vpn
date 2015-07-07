require('./boot');
frisby.create('Get Landing page - City')
    .get(URL_seo_landings_city)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        city_name: String,
        text: String,
        category: Object
    })
    .toss()