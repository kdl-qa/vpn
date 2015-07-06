require('./boot');
frisby.create('Check Houses object')
    //.addHeader('token', userToken)
    .addHeader('token', agencyToken)
    .post(URL_realties_houses_check,
    {
        category: category_type1CategoryId,	//true
        categoryType: category_type1Id, //true
        region: regionsId, //true
        city: citiesId,	//true
        street:	streetsId,	//true
        houseNumber: ahr_houseNumber  //true
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