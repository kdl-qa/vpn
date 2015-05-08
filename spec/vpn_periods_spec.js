require('./boot');
frisby.create('Get Periods')
    .get(URL_period)
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
            periods.savePeriods(json);
        }
    })
    .toss()
