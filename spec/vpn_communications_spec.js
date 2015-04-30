require('./boot');
frisby.create('Get communications')
    .get(URL_communications)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([
        {
            id : String,
            name: String
        }
    ])
    .afterJSON(function (json) {
        if (json.id = String) {
            communications.saveCommunications(json);
        }
    })
    .toss()
