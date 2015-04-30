require('./boot');
frisby.create('Get Categories')
    .get(URL_categories)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([{
        id: String,
        name: String
    }])
    .afterJSON(function (json) {
       if (json.id = String) {
           category.saveCategories(json);
       }
    })
    .toss()
