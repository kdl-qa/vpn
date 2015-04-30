require('./boot');
frisby.create('Get Flats numbers')
    .get(URL_flats_numbers)
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
            flats.saveFlats(json);
        }
    })
    .toss()