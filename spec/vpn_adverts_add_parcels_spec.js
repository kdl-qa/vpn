require('./boot');
frisby.create('Add Parcels advert (sale)')
    .addHeader('token', agentToken)
    //.addHeader('token', agencyToken)
    .post(URL_adverts_parcels_add,
    {
        //title: advps_title,    //true
        operationType: operationtypesId,    //true
        price: advps_price,    //true
        currency: currencyId, //true
        ownerName: advps_ownerName,    //true
        ownerContacts: advps_ownerContacts,    //true
        description: advps_description,
        auction: true,  // true or false
        additionally: [additionals_cat2Id]
        //images: [{id:advertImage}]
    }, {json: true}
    )
    .inspectRequest()
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        id: String
    })
    .afterJSON(function (json) {
        adverts.saveParcelAdvertSale(json);
    })
    .toss()