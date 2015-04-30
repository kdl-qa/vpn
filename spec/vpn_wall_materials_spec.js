require('./boot');
frisby.create('Get wall materials')
    .get(URL_wall_materials)
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
            wallmaterials.saveWallMaterials(json);
        }
    })
    .toss()