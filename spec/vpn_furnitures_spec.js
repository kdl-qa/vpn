require('./boot');
frisby.create('Get furnitures')
    .get(URL_furnitures)
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
            furnitures.saveFurnitures(json);
        }
    })
    .toss()