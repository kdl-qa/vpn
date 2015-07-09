require('./boot');
frisby.create('Edit Parcel realty (sale)')
    //.addHeader('token', userToken)
    .addHeader('token', adminToken)
    .put(URL_realties_parcels_edit,
    {
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
    .afterJSON(function (json) {
        if (json.id === realtyParcelId ) {
            adverts.saveParcelAdvertSale(json);
        }
    })
    .toss()