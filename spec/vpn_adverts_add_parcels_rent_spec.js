require('./boot');
frisby.create('Add Parcels advert (rent)')
    .addHeader('token', userToken)
    //.addHeader('token', agencyToken)
    .post(URL_adverts_parcels_add,
    {
        //title: advpr_title,    //true
        operationType: operationTypeRent,    //true
        period: periodId,
        price: advpr_price,    //true
        currency: advpr_currency, //true
        availableFrom: advpr_availableFrom,
        ownerName: advpr_ownerName,    //true
        ownerContacts: advpr_ownerContacts,    //true
        description: advpr_description,
        auction: false,  // true or false
        additionally: [additionals_cat2Id]
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
        adverts.saveParcelAdvertRent(json);
    })
    .toss()