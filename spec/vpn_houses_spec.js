require('./boot');
frisby.create('Get Houses numbers')
    .get(URL_house_numbers)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([
        {
            id: String,
            number: Number
        }
    ])
    .afterJSON(function (json) {
        if (json.id = String) {
            houses.saveHouses(json);
        }
    })
    .toss()