require('./boot');
frisby.create('Edit advert (sale)')
    //.addHeader('token', userToken)
    .addHeader('token', adminToken)
    .put(URL_adverts_flats_admin_edit,
    {
        status: 1,    //true
        type: 'flat',
        userId: userId,
        operationType: operationtypesId,    //true
        price: advfs_price,    //true
        currency: currencyId, //true
        ownerName: advfs_ownerName,    //true
        ownerContacts: advfs_ownerContacts,    //true
        description: 'edited',
        auction: true,  // true or false
        repair: repairsId,
        bedsCount: advfs_bedsCount,
        furniture: [furnituresId],
        appliances: [appliancesId],
        additionally: [additionals_cat0Id]
        //images: "",
        //mainImage: ""
    }, {json: true}
    )
    .inspectJSON()
    .inspectBody()
    .inspectResponse()
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        id: String
    })
    .afterJSON(function (json) {
        if (json.id === advertsFlatSaleId ) {
            adverts.saveFlatAdvertSale(json);
        }
    })
    .toss()