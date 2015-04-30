require('./boot');
//for(i in URL_category_types)
frisby.create('Get Category-type 0')
    .get(URL_category_types_0)
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
            category_type0.saveCategory_type0(json);
        }
    })
    .toss()