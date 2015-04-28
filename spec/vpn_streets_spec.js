require('./boot');
frisby.create('Get city streets')
    .get(URL_streets)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    //.expectStatus(200)
    .expectJSON([
        {
            id: String,
            name:String
        }
    ])
    .afterJSON(function (json) {
        if (json.id = String) {
            streets.saveStreets(json);
        }
    })
    .toss()