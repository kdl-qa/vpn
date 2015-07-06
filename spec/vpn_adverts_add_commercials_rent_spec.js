require('./boot');
frisby.create('Add Commercial advert (rent)')
    //.addHeader('token', userToken)
    .addHeader('token', agencyToken)
    .post(URL_adverts_commercials_add,
    {
        //title: advcr_title,    //true
        operationType: operationTypeRent,    //true
        period: periodId,
        price: advcr_price,    //true
        currency: advcr_currency, //true
        availableFrom: advcr_availableFrom,
        ownerName: advcr_ownerName,    //true
        ownerContacts: advcr_ownerContacts,    //true
        description: advcr_description,
        auction: false,  // true or false
        repair: repairsId,
        additionally: [additionals_cat3Id]
        //images: "",
        //mainImage: ""
    }, {json: true}
    )
    .inspectRequest()
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(201)
    .expectJSON({
        id: String
    })
    .afterJSON(function (json) {
        adverts.saveCommercialAdvertRent(json);
    })
    .toss()