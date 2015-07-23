require('./boot');
var name = String;
frisby.create('Create list of adverts')
    .addHeader('token', userToken)
    .post(URL_create_list_adverts,
    {
        name: "API automated test list",
        slug: "api-automated-test-list111",
        title: "API automated test list",
        isFollow: true,
        isIndex: true
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
        advert: Array,
        metaRobots: String
    })
    .afterJSON(function (json) {
        adverts.saveAdvertList(json);
    })
    .toss()
