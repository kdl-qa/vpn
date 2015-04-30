require('./boot');
frisby.create('Get near objects')
    .get(URL_near_objects)
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
            nearobjects.saveNearObjects(json);
        }
    })
    .toss()