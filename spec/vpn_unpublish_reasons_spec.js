require('./boot');
frisby.create('Get Unpublish Reasons')
    .get(URL_unpublish_reasons)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([
        {
            id: String,
            name: String}
    ])
    .afterJSON(function (json){
        if (json.name = String) {
            unpublish_reasons.saveUnpublishReasons(json);
        }
    })
    .toss()