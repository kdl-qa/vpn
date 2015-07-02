require('./boot');
frisby.create('Get SEO - Main Page')
    .get(URL_seo_main_text)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        id: String,
        title: String,
        text: String,
        key: String
    })
    .toss()