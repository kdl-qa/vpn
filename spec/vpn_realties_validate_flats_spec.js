require('./boot');
frisby.create('Validate Flat object')
    //.addHeader('token', userToken)
    .addHeader('token', agencyToken)
    .post(URL_realties_flats_validate,
    {
        category: category_type0CategoryId,
        categoryType: category_type0Id,
        region: regionsId,
        city: citiesId,
        district: districtsId,
        street:	streetsId,
        houseNumber: afr_houseNumber,
        flatNumber: afr_flatNumber,
        latitude: afr_latitude,
        longitude: afr_longitude,
        marketType: marketsId,
        roomCount: afr_roomCount,
        wallMaterial: wallmaterialsId,
        area: afr_area,
        areaUnit: areaunitsId,
        livingArea: afr_livingArea,
        kitchenArea: afr_kitchenArea,
        floor: afr_floor,
        floorNumber: afr_floorNumber,
        buildYear: afr_buildYear,
        wc: wcId,
        balcony: balconiesId,
        heating: heatingsId,
        waterHeating: waterheatId,
        nearObjects: [nearobjectsId]
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