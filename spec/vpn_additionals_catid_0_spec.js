require('./boot');
frisby.create('Get Additionals 0')
    .get(URL_additionals_0)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([{
        id: String,
        name: String
    }])
    .afterJSON(function (json) {
        if (json.id = String) {
            additionals_cat0.saveAdditionals_cat0(json);
        }
    })
    .toss()
