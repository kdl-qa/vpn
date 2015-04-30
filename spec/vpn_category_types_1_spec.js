require('./boot');
//for(i in URL_category_types)
frisby.create('Get Category-type 1')
    .get(URL_category_types_1)
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
            category_type1.saveCategory_type1(json);
        }
    })
    .toss()