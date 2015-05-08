require('./boot');
frisby.create('Add Commercial property')
    .addHeader('token', userToken)
    .post(URL_realties_commercials_validate,
    {
        category: category_type3CategoryId,
        categoryType: category_type3Id,
        region: regionsId,
        city: citiesId,
        district: districtsId,
        street:	streetsId,
        houseNumber: acr_houseNumber,
        latitude: acr_latitude,
        longitude: acr_longitude,
        area: acr_area,
        areaUnit: areaunitsId,
        effectiveArea: acr_effectiveArea,
        wallMaterial: wallmaterialsId,
        roomCount: acr_roomCount,
        floor: acr_floor,
        floorNumber: acr_floorNumber,
        buildYear: acr_buildYear,
        wc:	wcId,
        heating: heatingsId,
        waterHeating: waterheatId,
        communication: [communicationsId]
    }, {json: true}
    )
    .inspectRequest()
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        category: String,
        categoryType: String,
        region: String,
        city: String,
        district: String,
        street:	String,
        houseNumber: Number,
        latitude: Number,
        longitude: Number,
        area: Number,
        areaUnit: String,
        effectiveArea: Number,
        wallMaterial: String,
        roomCount: Number,
        floor: Number,
        floorNumber: Number,
        buildYear: Number,
        wc:	String,
        heating: String,
        waterHeating: String,
        communication: Array
    })
    .toss()