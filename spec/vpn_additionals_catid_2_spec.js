require('./boot');
frisby.create('Get Additionals 2')
    .get(URL_additionals_2)
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
            additionals_cat2.saveAdditionals_cat2(json);
        }
    })
    .toss()