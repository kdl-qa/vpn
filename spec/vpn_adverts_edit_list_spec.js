require('./boot');
var name = String;
frisby.create('Edit list of adverts')
    //.addHeader('token', userToken)
    .addHeader('token', agencyToken)
    .put(URL_edit_list_adverts,
    {
        name: "API automated test list",
        slug: "api-autom-test",
        title: "API automated test list"
    }, {json: true}
    )
    //.inspectRequest()
    .inspectJSON()
    .inspectBody()
    .inspectResponse()
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    .expectJSONTypes({
        id: String,
        name: String,
        slug: String,
        advert: Array
    })
    .afterJSON(function (json) {
        if (json.id === advertsListId ) {
            adverts.saveAdvertList(json);
        }
    })
    .toss()
