require('./boot');
frisby.create('Validate Houses object')
    .addHeader('token', userToken)
    .post(URL_realties_houses_validate,
    {
        category: category_type1CategoryId,
        categoryType: category_type1Id,
        region: regionsId,
        city: citiesId,
        district: districtsId,
        street:	streetsId,
        houseNumber: ahr_houseNumber,
        latitude: ahr_latitude,
        longitude: ahr_longitude,
        roomCount: ahr_roomCount,
        wallMaterial: wallmaterialsId,
        area: ahr_area,
        areaUnit: areaunitsId,
        livingArea: ahr_livingArea,
        kitchenArea: ahr_kitchenArea,
        landArea: ahr_landArea,
        landAreaUnit: ahr_landAreaUnit,
        floor: afr_floor,
        floorNumber: ahr_floorNumber,
        buildYear: ahr_buildYear,
        heating: heatingsId,
        waterHeating: waterheatId,
        communication: [communicationsId],
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
        street:	String,
        houseNumber: Number,
        latitude: Number,
        longitude:Number,
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