require('./boot');
frisby.create('Add Houses advert (sale)')
    .addHeader('token', userToken)
    //.addHeader('token', agencyToken)
    .post(URL_adverts_houses_add,
    {
        //title: advhs_title,    //true
        operationType: operationtypesId,    //true
        price: advhs_price,    //true
        currency: currencyId, //true
        ownerName: advhs_ownerName,    //true
        ownerContacts: advhs_ownerContacts,    //true
        description: advhs_description,
        auction: true,  // true or false
        repair: repairsId,
        furniture: [furnituresId],
        appliances: [appliancesId],
        additionally: [additionals_cat1Id]
        //images: []
    }, {json: true}
    )
    .inspectRequest()
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        id: String
    })
    .afterJSON(function (json) {
        adverts.saveHouseAdvertSale(json);
    })
    .toss()