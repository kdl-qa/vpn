require('./boot');
frisby.create('Get Admin - list adverts (sort)')
    .addHeader('token', adminToken)
    .get(URL_admin_realties_list +      //
    //'?category='+ category_type0CategoryId+       // flats, houses, parcels, commercials
    '?status=1'+ // 0,1,2,3,4
    '&region='+ regionsId +
    '&city='+ citiesId +
    '&street='+ streetsId)
    //'&status=0'+
    //'&author='+)
    //.inspectRequest()
    .inspectHeaders()
    .inspectJSON()
    .inspectRequest()
    //.inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        total: Number,
        count: Number,
        page: Number,
        data: Array

    })          //Only in positive case
    .toss()