require('./boot');
frisby.create('Edit Parcel advert (sale)')
    //.addHeader('token', userToken)
    .addHeader('token', agencyToken)
    .put(URL_adverts_parcels_edit,
    {
        //title: advfs_title,    //true
        operationType: operationtypesId,    //true
        price: advps_price,    //true
        currency: currencyId, //true
        ownerName: advps_ownerName,    //true
        ownerContacts: advps_ownerContacts,    //true
        description: 'edited',
        auction: true,  // true or false
        additionally: [additionals_cat2Id]
        //images: "",
        //mainImage: ""
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
        if (json.id === advertsParcelSaleId ) {
            adverts.saveParcelAdvertSale(json);
        }
    })
    .toss()