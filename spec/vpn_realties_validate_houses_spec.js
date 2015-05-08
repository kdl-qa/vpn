require('./boot');
frisby.create('Validate Houses object')
    .addHeader('token', userToken)
    .post(URL_realties_houses_validate,
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
        marketType: marketsId,   //false
        roomCount: ahr_roomCount,    //true
        wallMaterial: wallmaterialsId, //true
        area: ahr_area, //true
        areaUnit: areaunitsId, //true
        livingArea: ahr_livingArea,   //false
        kitchenArea: ahr_kitchenArea,  //false
        landArea: ahr_landArea,
        landAreaUnit: ahr_landAreaUnit,
        floor: afr_floor,    //true
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
    .expectJSONTypes({
        category: String,
        categoryType: String,
        region: String,
        city: String,
        district: String,
        street:	String,
        houseNumber: Number,
        latitude: Number,
        longitude:Number,
       // marketType: String,
        roomCount: Number,
        wallMaterial: String,
        area: Number,
        areaUnit: String,
        livingArea: Number,
        kitchenArea: Number,
        landArea: Number,
        landAreaUnit: String,
        floorNumber: Number,
        buildYear: Number,
        heating: String,
        waterHeating: String,
        communication: Array,
        nearObjects: Array
    })
    .toss()