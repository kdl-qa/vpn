require('./boot');
var name = String;
frisby.create('Create info page')
    .addHeader('token', adminToken)
    .post(URL_info_pages_create,
    {
        name: "api-test",
        latinName: "api-test",
        content: "api-test",
        title: "api-test",
        metaDescription: "api-test"
    }, {json: true}
    )
    //.inspectRequest()
    .inspectJSON()
    .inspectBody()
    .inspectResponse()
    .expectStatus(201)
    .expectHeader('Content-Type', 'application/json')
    .expectJSONTypes({
        name: String,
        latinName: String,
        content: String,
        title: String,
        metaDescription: String,
        metaRobots: String
    })
    .afterJSON(function (json) {
        info_page.saveInfoPage(json);
    })
    .toss()
