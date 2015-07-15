require('./boot');
frisby.create('Add Houses advert (rent)')
    .addHeader('token', userToken)
    //.addHeader('token', agencyToken)
    .post(URL_adverts_houses_add,
    {
        //title: advhr_title,    //true
        operationType: operationTypeRent,    //true
        period: periodId,
        price: advhr_price,    //true
        currency: advhr_currency, //true
        availableFrom: advhr_availableFrom,
        ownerName: advhr_ownerName,    //true
        ownerContacts: advhr_ownerContacts,    //true
        description: advhr_description,
        auction: false,  // true or false
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
        adverts.saveHouseAdvertRent(json);
    })
    .toss()