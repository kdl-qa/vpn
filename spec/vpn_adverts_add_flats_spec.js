require('./boot');
frisby.create('Add Flat advert (sale)')
    .addHeader('token', userToken)
    //.addHeader('token', agencyToken)
    .post(URL_adverts_flats_add,
    {
        operationType: operationtypesId,    //true
        price: advfs_price,    //true
        currency: currencyId, //true
        ownerName: advfs_ownerName,    //true
        ownerContacts: advfs_ownerContacts,    //true
        description: advfs_description,
        auction: true,  // true or false
        repair: repairsId,
        bedsCount: advfs_bedsCount,
        furniture: [furnituresId],
        appliances: [appliancesId],
        additionally: [additionals_cat0Id],
        images: [{id:advertImage}]
    }, {json: true}
    )
    .inspectRequest()
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        id: String
    })
    .afterJSON(function (json) {
        adverts.saveFlatAdvertSale(json);
    })
    .toss()