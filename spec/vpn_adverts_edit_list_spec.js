require('./boot');
var name = String;
frisby.create('Edit list of adverts')
    .addHeader('token', agencyToken)
    .put(URL_edit_list_adverts,
    {
        name: "API automated test list",
        client: userId
    }, {json: true}
    )
    .inspectJSON()
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    .expectJSONTypes({
        id: String,
        name: String
    })
    .afterJSON(function (json) {
        if (json.id === advertsListId ) {
            adverts.saveAdvertList(json);
        }
    })
    .toss()
