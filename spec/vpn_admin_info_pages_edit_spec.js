require('./boot');
var name = String;
frisby.create('Edit info page')
    .addHeader('token', adminToken)
    //.addHeader('token', agencyToken)
    .put(URL_info_pages_edit,
    {
        name: "api-test edited",
        latinName: "api-test",
        content: "api-test",
        title: "api-test",
        metaDescription: "api-test",
        isIndex: true
    }, {json: true}
    )
    //.inspectRequest()
    .inspectJSON()
    //.inspectBody()
    //.inspectResponse()
    .expectStatus(200)
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
        if (json.latinName === infoPageLatinName ) {
            info_page.saveInfoPage(json);
        }
    })
    .toss()
