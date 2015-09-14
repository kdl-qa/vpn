require('./boot');
frisby.create('Edit Flat advert (sale)')
    .addHeader('token', agentToken)
    //.addHeader('token', agencyToken)
    .put(URL_adverts_flats_edit,
    {
        //title: advfs_title,    //true
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
        additionally: [additionals_cat0Id],
        marketType: marketsId   //false
        //images: [{id:advertImage, mainImage:false}, {id:advertImage2, mainImage:true}]
    }, {json: true}
    )
    .inspectJSON()
    .inspectBody()
    //.inspectResponse()
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