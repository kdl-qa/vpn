require('./boot');
frisby.create('Edit House advert (sale)')
    //.addHeader('token', userToken)
    .addHeader('token', agencyToken)
    .put(URL_adverts_houses_edit,
    {
        //title: advfs_title,    //true
        operationType: operationtypesId,    //true
        price: advhs_price,    //true
        currency: currencyId, //true
        ownerName: advhs_ownerName,    //true
        ownerContacts: advhs_ownerContacts,    //true
        description: 'edited',
        auction: true,  // true or false
        repair: repairsId,
        furniture: [furnituresId],
        appliances: [appliancesId],
        additionally: [additionals_cat1Id]
        //images: [{id:advertImage}]
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
            adverts.saveHouseAdvertSale(json);
        }
    })
    .toss()