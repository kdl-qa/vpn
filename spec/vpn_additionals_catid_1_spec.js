require('./boot');
frisby.create('Get Additionals 1')
    .get(URL_additionals_1)
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
            additionals_cat1.saveAdditionals_cat1(json);
        }
    })
    .toss()