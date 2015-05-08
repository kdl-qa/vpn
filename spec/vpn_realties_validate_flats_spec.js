require('./boot');
frisby.create('Validate Flat object')
    .addHeader('token', userToken)
    .post(URL_realties_flats_validate,
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
    }, {json: true}
    )
    .inspectRequest()
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSONTypes({
        category: String,
        categoryType: String,
        region: String,
        city: String,
        district: String,
        street: String,
        houseNumber: Number,
        flatNumber: Number,
        latitude: Number,
        longitude: Number,
        marketType: String,
        roomCount: Number,
        wallMaterial: String,
        area: Number,
        areaUnit: String,
        livingArea: Number,
        kitchenArea: Number,
        floor: Number,
        floorNumber: Number,
        buildYear: Number,
        wc: String,
        balcony: String,
        heating: String,
        waterHeating: String,
        nearObjects: Array
    })
    .toss()