require('./boot');
var name = String;
frisby.create('Edit info page')
    .addHeader('token', adminToken)
    //.addHeader('token', agencyToken)
    .put(URL_info_pages_edit,
    {
        name: editInfoPageData.name,
        latinName: editInfoPageData.latinName,
        content: editInfoPageData.content,
        title: editInfoPageData.title,
        metaDescription: editInfoPageData.metaDescription,
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
        if (json.latinName === editInfoPageLatinName ) {
            info_page.saveInfoPage(json);
        }
    })
    .toss()
