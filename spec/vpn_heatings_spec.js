require('./boot');
frisby.create('Get heatings')
    .get(URL_heatings)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([
        {
            id: String,
            name:String
        }
    ])
    .afterJSON(function (json) {
        if (json.id = String) {
            heatings.saveHeatings(json);
        }
    })
    .toss()