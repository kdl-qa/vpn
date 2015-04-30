require('./boot');
frisby.create('Get water heatings')
    .get(URL_water_heatings)
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
            waterheat.saveWaterHeatings(json);
        }
    })
    .toss()