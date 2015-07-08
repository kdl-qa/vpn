require('./boot');
frisby.create('Get Admin - list adverts (sort)')
    .addHeader('token', adminToken)
    .get(URL_admin_adverts_list +      //
    //'?operationType='+operationtypesId+       // Sale or Rent
    '?realtyId='+realtyFlatId)    // flats, houses, parcels, commercials
    //'&status=0'+
    //'&author='+)
    //.inspectRequest()
    .inspectHeaders()
    .inspectJSON()
    //.inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        total: Number,
        count: Number,
        page: Number,
        user: Object,
        realty: Object

    })          //Only in positive case
    .toss()