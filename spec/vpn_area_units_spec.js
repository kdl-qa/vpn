require('./boot');
frisby.create('Get Area_units')
    .get(URL_area_units)
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
            areaunits.saveAreaUnits(json);
        }
    })
    .toss()

