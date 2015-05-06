require('./boot');
frisby.create('Add Flat object')
    .addHeader('token', userToken)
    .post(URL_realties_flats_add,
    {
        category: category_type0CategoryId,	//true
        categoryType: category_type0Id, //true
        region: regionsId, //true
        city: citiesId,	//false
        district: districtsId, //false
        street:	streetsId,	//false
        houseNumber: afr_houseNumber,  //true
        flatNumber: afr_flatNumber,   //true
        latitude: afr_latitude, //true
        longitude: afr_longitude, //true
        marketType: marketsId,   //false
        roomCount: afr_roomCount,    //true
        wallMaterial: wallmaterialsId, //true
        area: afr_area, //true
        areaUnit: areaunitsId, //true
        livingArea: afr_livingArea,   //false
        kitchenArea: afr_kitchenArea,  //false
        floor: afr_floor,    //true
        floorNumber: afr_floorNumber,  //true
        buildYear: afr_buildYear,    //false
        wc: wcId,   //false
        balcony: balconiesId,  //false
        heating: heatingsId,  //false
        waterHeating: waterheatId, //false
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
        useRealties.saveFlatObject(json);
    })
    .toss()