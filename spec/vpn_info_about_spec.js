require('./boot');
frisby.create('Get Info Page - About')
    .get(URL_info_page_about)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        latin_name: String,
        title: String,
        description: String,
        content: String
    })
    .toss()