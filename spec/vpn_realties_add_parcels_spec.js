require('./boot');
frisby.create('Add Parcel object')
    .addHeader('token', userToken)
    .post(URL_realties_parcels_add,
    {
        category: category_type2CategoryId,	//true
        categoryType: category_type2Id, //true
        region: regionsId, //true
        city: citiesId,	//false
        district: districtsId, //false
        street:	streetsId,	//false
        cadastralNumber: apr_cadastralNumber,
        latitude: apr_latitude, //true
        longitude: apr_longitude, //true
        area: apr_area, //true
        areaUnit: apr_areaunitsId, //true
        communication: [communicationsId], //false
        nearObjects: [nearobjectsId]
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
        useRealties.saveParcelObject(json);
    })
    .toss()