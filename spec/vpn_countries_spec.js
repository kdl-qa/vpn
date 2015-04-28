require('./boot');
frisby.create('Get countries')
    .get(URL_countries)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON([
        {name : 'Украина'}
    ])
    //.expectJSONTypes([
    //    {
    //        id : String,
    //        name : String
    //    }
    //])
    .toss()