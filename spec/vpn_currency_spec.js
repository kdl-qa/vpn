require('./boot');
frisby.create('Get Money Currency')
    .get(URL_currency)
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
            currency.saveCurrency(json);
        }
    })
    .toss()