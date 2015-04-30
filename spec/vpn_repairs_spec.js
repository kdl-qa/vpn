require('./boot');
frisby.create('Get repairs')
    .get(URL_repairs)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([
        {
            id: String,
            name: String
        }
    ])
    .afterJSON(function(json) {
        if (json.id = String) {
            repairs.saveRepairs(json);
        }
    })
    .toss()