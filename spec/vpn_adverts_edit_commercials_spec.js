require('./boot');
frisby.create('Edit Commercial advert (sale)')
    .addHeader('token', agentToken)
    //.addHeader('token', agencyToken)
    .put(URL_adverts_commercials_edit,
    {
        //title: advfs_title,    //true
        operationType: operationtypesId,    //true
        price: advcs_price,    //true
        currency: currencyId, //true
        ownerName: advcs_ownerName,    //true
        ownerContacts: advcs_ownerContacts,    //true
        description: 'edited',
        auction: true,  // true or false
        repair: repairsId,
        additionally: [additionals_cat3Id]
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
        if (json.id === advertsCommercialsSaleId ) {
            adverts.saveCommercialAdvertSale(json);
        }
    })
    .toss()