require('./boot');
var name = String;
frisby.create('Create list of adverts')
    .addHeader('token', agencyToken)
    .post(URL_create_list_adverts,
    {
        name: "API automated test list",
        client: userId
    }, {json: true}
    )
    //.inspectRequest()
    .inspectJSON()
    .inspectBody()
    //.inspectResponse()
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    .expectJSONTypes({
        id: String,
        name: String,
        count: Number,
        adverts: Array,
    })
    .afterJSON(function (json) {
        adverts.saveAdvertList(json);
    })
    .toss()
