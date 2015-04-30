require('./boot');
frisby.create('Get Appliances')
    .get(URL_appliances)
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
            appliances.saveAppliances(json);
        }
    })
    .toss()
