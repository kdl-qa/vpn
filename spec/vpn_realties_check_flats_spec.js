require('./boot');
frisby.create('Check Flats object')
    .addHeader('token', userToken)
    .post(URL_realties_flats_check,
    {
        category: category_type0CategoryId,	//true
        categoryType: category_type0Id, //true
        region: regionsId, //true
        city: citiesId,	//false
        street:	streetsId,	//false
        houseNumber: afr_houseNumber,  //true
        flatNumber: afr_flatNumber  //true
    }, {json: true}
    )
    .inspectRequest()
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        id: String
    })
    //.afterJSON(function (json) {
    //    useRealties.saveFlatObject(json);
    //})
    .toss()