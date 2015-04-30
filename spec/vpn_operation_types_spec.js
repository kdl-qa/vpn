require('./boot');
frisby.create('Get operation types')
    .get(URL_operation_types)
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
            operationtypes.saveOperationTypes(json);
        }
    })
    .toss()