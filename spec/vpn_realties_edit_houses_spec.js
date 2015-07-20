require('./boot');
frisby.create('Edit Houses object')
    //.addHeader('token', userToken)
    .addHeader('token', adminToken)
    .put(URL_realties_houses_edit,
    {
        status: 1,
        region: regionsId, //true
        city: citiesId,	//false
        district: districtsId, //false
        street:	streetsId,	//false
        houseNumber: ahr_houseNumber,  //true
        latitude: ahr_latitude, //true
        longitude: ahr_longitude, //true
        roomCount: ahr_roomCount,    //true
        wallMaterial: wallmaterialsData[1].id, //true
        area: ahr_area, //true
        areaUnit: areaunitsId, //true
        livingArea: ahr_livingArea,   //false
        kitchenArea: ahr_kitchenArea,  //false
        landArea: ahr_landArea,
        landAreaUnit: ahr_landAreaUnit,
        floorNumber: ahr_floorNumber,  //true
        buildYear: ahr_buildYear,    //false
        heating: heatingsData[1].id,  //false
        waterHeating: waterheatData[1].id, //false
        communication: [communicationsData[0].id, communicationsData[1].id, communicationsData[2].id],
        nearObjects: [nearobjectsData[0].id, nearobjectsData[1].id, nearobjectsData[2].id]    //false
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
        if (json.id === realtyHouseId ) {
            useRealties.saveHouseObject(json);
        }
    })
    .toss()