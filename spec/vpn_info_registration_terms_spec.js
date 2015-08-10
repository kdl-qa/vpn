require('./boot');
frisby.create('Get Info Page - Registration Term Admin amd Agent')
    .get(URL_info_page_registration_agency_agent)
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