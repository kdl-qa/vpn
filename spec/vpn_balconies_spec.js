
require('./boot');
frisby.create('Get Area_units')
    .get(URL_balconies)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes([{
        id: String,
        name: String
    }])
    .afterJSON(function (json) {
        if (json.id = String) {
            balconies.saveBalconies(json);
        }
    })
    .toss()
