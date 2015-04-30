require('./boot');
frisby.create('Get WC')
    .get(URL_wc)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([
        {
            id: String,
            name: String}
    ])
    .afterJSON(function (json){
        if (json.name = String) {
            wc.saveWc(json);
        }
    })
    .toss()