require('./boot');
frisby.create('Edit Commercial advert (sale)')
    //.addHeader('token', userToken)
    .addHeader('token', adminToken)
    .put(URL_admin_adverts_commercials_edit,
    {
        realtyId: realtyCommercialId,
        status: 2,    //0,1,2,3,4
        rejectionReason: 'Your Announcement incorrectly added to our system. Please, add the new one, with right content.', //status: 2
        unpublishReason: unpublishReasonsData[0].id, // otherReason = unpublishReasonsData[1].id , status: 3,4
        unpublishDescription: "Недвижимость Продано. Более детальная информация не предоставляется.",
        unpublishPrice: 3456789,
        unpublishCurrency: currencyData[1].id,
        type: 'commercial-property',
        userId: agentId,
        operationType: operationtypesData[0].id,    // Аренда = 0, Продажа = 1
        price: advcs_price,    //true
        currency: currencyData[1].id, //true
        ownerName: advcs_ownerName,    //true
        ownerContacts: advcs_ownerContacts,    //true
        description: Math.random().toString(36).substring(6),
        auction: true,  // true or false
        repair: repairsId,
        additionally: [additionals_cat3Id, additionals_cat3Data[1].id, additionals_cat3Data[2].id]
        //images: [{id:advertImage, mainImage:true}]
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
        if (json.id === advertsCommercialsSaleId ) {
            adverts.saveFlatAdvertSale(json);
        }
    })
    .toss()