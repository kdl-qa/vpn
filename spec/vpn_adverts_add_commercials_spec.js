require('./boot');
frisby.create('Add Commercial advert (sale)')
    .addHeader('token', userToken)
    //.addHeader('token', agencyToken)
    .post(URL_adverts_commercials_add,
    {
        //title: advcs_title,    //true
        operationType: operationtypesId,    //true
        price: advcs_price,    //true
        currency: currencyId, //true
        ownerName: advcs_ownerName,    //true
        ownerContacts: advcs_ownerContacts,    //true
        description: advcs_description,
        auction: true,  // true or false
        repair: repairsId,
        additionally: [additionals_cat3Id]
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
        adverts.saveCommercialAdvertSale(json);
    })
    .toss()