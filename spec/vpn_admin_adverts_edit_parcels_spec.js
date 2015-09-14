require('./boot');
frisby.create('Edit advert (sale)')
    //.addHeader('token', userToken)
    .addHeader('token', adminToken)
    .put(URL_admin_adverts_parcels_edit,
    {
        realtyId: realtyParcelId,
        status: 2,    //0,1,2,3,4
        rejectionReason: 'Your Announcement incorrectly added to our system. Please, add the new one, with right content.', //status: 2
        unpublishReason: unpublishReasonsData[0].id, // otherReason = unpublishReasonsData[1].id , status: 3,4
        unpublishDescription: "Недвижимость Продано. Более детальная информация не предоставляется.",
        unpublishPrice: 3456789,
        unpublishCurrency: currencyData[1].id,
        type: 'parcels',
        userId: agentId,
        operationType: operationtypesData[0].id,    // Аренда = 0, Продажа = 1
        price: advps_price,    //true
        currency: currencyData[1].id, //true
        ownerName: advps_ownerName,    //true
        ownerContacts: advps_ownerContacts,    //true
        description: Math.random().toString(36).substring(6),
        auction: true,  // true or false
        additionally: [additionals_cat2Id, additionals_cat2Data[1].id, additionals_cat2Data[3].id]
        //images: [{id:advertImage}]
    }, {json: true}
    )
    .inspectJSON()
    //.inspectRequest()
    .inspectBody()
    //.inspectResponse()
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