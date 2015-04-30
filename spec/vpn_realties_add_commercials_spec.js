require('./boot');
frisby.create('Add Commercial property')
    .addHeader('token', userToken)
    .post(URL_realties_commercials_add,
    {
        category: categoryId,	//true
        categoryType: category_type3Id, //true
        region: regionsId, //true
        city: citiesId,	//true
        district: districtsId, //false
        street:	streetsId,	//true
        houseNumber: houseNumber, //true
        latitude: latitude, //true
        longitude: longitude, //true
        area: area, //true
        areaUnit: areaunitsId, //true
        effectiveArea: effectiveArea, //true
        wallMaterial: wallmaterialsId, //true
        roomCount: roomCount, //false, true
        floor: floor, //true
        floorNumber: floorNumber, //true
        buildYear: buildYear, //false
        wc:	wcId,//false
        heating: heatingsId, //false
        waterHeating: waterheatId, //false
        communication: communicationsId //false
        //schema: ""
    }, {json: true}
    )
    .inspectRequest()
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    //.expectJSON([{
    //    id: String,
    //    name: String
    //}])
    .toss()