require('./boot');
frisby.create('Get Category-type 2')
    .get(URL_category_types_2)
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
    .afterJSON(function (json) {
        if (json.id = String) {
            category_type2.saveCategory_type2(json);
        }
    })
    .toss()