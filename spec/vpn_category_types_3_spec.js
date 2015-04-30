require('./boot');
frisby.create('Get Category-type 3')
    .get(URL_category_types_3)
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
            category_type3.saveCategory_type3(json);
        }
    })
    .toss()