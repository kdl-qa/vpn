require('./boot');
//for(i in URL_category_types)
frisby.create('Get Category-type 2')
    .get(URL_category_types_2)
    //.get(URL_category_types_3)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    //.expectJSON([{
    //    id: String,
    //    name: String
    //}])
    .expectBodyContains('Участок под жилую застройку')
    .toss()