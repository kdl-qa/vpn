require('./boot');
frisby.create('Get market types')
    .get(URL_market_types)
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
            markets.saveMarkets(json);
        }
    })
    .toss()