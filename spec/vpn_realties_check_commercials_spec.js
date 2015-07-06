require('./boot');
frisby.create('Check Commercials object')
    //.addHeader('token', userToken)
    .addHeader('token', agencyToken)
    .post(URL_realties_commercials_check,
    {
        category: category_type3CategoryId,	//true
        categoryType: category_type3Id, //true
        region: regionsId, //true
        city: citiesId,	//false
        street:	streetsId,	//false
        houseNumber: acr_houseNumber,  //true
    }, {json: true}
    )
    .inspectRequest()
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        id: String
    })
    //.afterJSON(function (json) {
    //    useRealties.saveCommercialObject(json);
    //})
    .toss()