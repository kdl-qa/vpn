require('./boot');
frisby.create('Get city districts')
    .get(URL_districts)
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
            districts.saveDistricts(json);
        }
    })
    .toss()