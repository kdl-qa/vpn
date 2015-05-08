require('./boot');
frisby.create('Add Commercial property')
    .addHeader('token', userToken)
    .post(URL_realties_commercials_add,
    {
        category: category_type3CategoryId,	//true
        categoryType: category_type3Id, //true
        region: regionsId, //true
        city: citiesId,	//true
        district: districtsId, //false
        street:	streetsId,	//true
        houseNumber: acr_houseNumber, //true
        latitude: acr_latitude, //true
        longitude: acr_longitude, //true
        area: acr_area, //true
        areaUnit: areaunitsId, //true
        effectiveArea: acr_effectiveArea, //true
        wallMaterial: wallmaterialsId, //true
        roomCount: acr_roomCount, //false, true
        floor: acr_floor, //true
        floorNumber: acr_floorNumber, //true
        buildYear: acr_buildYear, //false
        wc:	wcId,//false
        heating: heatingsId, //false
        waterHeating: waterheatId, //false
        communication: [communicationsId] //false
        //schema: ""
    }, {json: true}
    )
    .inspectRequest()
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        id: String
    })
    .afterJSON(function (json){
        useRealties.saveCommercialObject(json);
    })
    .toss()