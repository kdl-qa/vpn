require('./boot');
frisby.create('Negative - add the same House object')
    .addHeader('token', userToken)
    .post(URL_realties_houses_add,
    {
        category: category_type1CategoryId,	//true
        categoryType: category_type1Id, //true
        region: regionsId, //true
        city: citiesId,	//false
        district: districtsId, //false
        street:	streetsId,	//false
        houseNumber: ahr_houseNumber,  //true
        latitude: ahr_latitude, //true
        longitude: ahr_longitude, //true
        roomCount: ahr_roomCount,    //true
        wallMaterial: wallmaterialsId, //true
        area: ahr_area, //true
        areaUnit: areaunitsId, //true
        livingArea: ahr_livingArea,   //false
        kitchenArea: ahr_kitchenArea,  //false
        landArea: ahr_landArea,
        landAreaUnit: ahr_landAreaUnit,
        floorNumber: ahr_floorNumber,  //true
        buildYear: ahr_buildYear,    //false
        heating: heatingsId,  //false
        waterHeating: waterheatId, //false
        communication: [communicationsId],
        nearObjects: [nearobjectsId]    //false
        //schema: ""
    }, {json: true}
    )
    .inspectRequest()
    .inspectJSON()
    //.inspectStatus()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(400)
    .expectJSON({
        errors: {
            house: [ 'realty_exists' ]
        }
    })
    .toss()