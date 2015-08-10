require('./boot');
frisby.create('Get Info Page - About')
    .get(URL_info_page_about)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        name: String,
        latinName: String,
        content: String,
        title: String,
        metaDescription: String,
        metaKeywords: String,
        metaRobots: String
    })
    .toss()