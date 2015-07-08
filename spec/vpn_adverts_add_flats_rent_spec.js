require('./boot');
frisby.create('Add Flat advert (rent)')
    .addHeader('token', userToken)
    //.addHeader('token', agencyToken)
    .post(URL_adverts_flats_add,
    {
        //title: advfr_title,    //true
        operationType: operationTypeRent,    //true
        period: periodId,    //rent for a month
        price: advfr_price,    //true
        currency: advfr_currency, //true
        availableFrom: advfr_availableFrom,    //true ???
        ownerName: advfr_ownerName,    //true
        ownerContacts: advfr_ownerContacts,    //true
        description: advfr_description,
        auction: false,  // true or false
        repair: repairsId,
        bedsCount: advfr_bedsCount,
        furniture: [furnituresId],
        appliances: [appliancesId],
        additionally: [additionals_cat0Id]
        //images: "",
        //mainImage: ""
    }, {json: true}
    )
    .inspectRequest()
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        id: String
    })
    .afterJSON(function (json) {
        adverts.saveFlatAdvertRent(json);
    })
    .toss()