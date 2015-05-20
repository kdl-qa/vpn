require('./boot');
frisby.create('Get cities')
    .get(URL_cities)
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
        if (json.name = String) {
            cities.saveCities(json);
            //getCitiesData();
        }
    })
    .toss()