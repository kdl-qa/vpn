require('./boot');
frisby.create('Get Additionals')
    .get(URL_additionals_3)
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
            additionals_cat3.saveAdditionals_cat3(json);
        }
    })
    .toss()