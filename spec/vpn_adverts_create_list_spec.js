require('./boot');
var name = String;
frisby.create('Create list of adverts')
    .addHeader('token', userToken)
    .post(URL_create_list_adverts,
    {name: "API automated test list"
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
        name: String
    })
    .afterJSON(function (json) {
        adverts.saveAdvertList(json);
    })
    .toss()
