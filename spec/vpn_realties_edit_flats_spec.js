require('./boot');
frisby.create('Edit Flat object')
    .addHeader('token', adminToken)
    //.addHeader('token', agencyToken)
    .put(URL_realties_flats_edit,
    {
        region: regionsId, //true
        city: citiesId,	//true
        district: districtsId, //false
        street:	streetsData[1].id,	//false
        houseNumber: ahr_houseNumber,  //true
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
        if (json.id === realtyFlatId ) {
            useRealties.saveFlatObject(json);
        }
    })
    .toss()