require('./boot');
frisby.create('Get regions')
    .get(URL_regions)
    .inspectJSON()
    //.inspectBody()
    .expectHeader('Content-Type', 'application/json')
    //.expectStatus(200)
    .expectJSON([
        {
            id: String,
            name: String
        }
    ])
    .afterJSON(function (json) {
        if (json.name = String) {
            regions.saveRegions(json);
            getRegionData();
        }
    })
    .toss()