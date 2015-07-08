require('./boot');
frisby.create('Add Houses object')
    .addHeader('token', userToken)
    //.addHeader('token', agencyToken)
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
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        id: String
    })
    .afterJSON(function (json) {
        useRealties.saveHouseObject(json);
    })
    .toss()