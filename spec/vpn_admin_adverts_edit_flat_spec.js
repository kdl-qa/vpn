require('./boot');
frisby.create('Edit Flat advert (sale)')
    //.addHeader('token', userToken)
    .addHeader('token', adminToken)
    .put(URL_admin_adverts_flats_edit,
    {
        realtyId: realtyFlatId,
        status: 2,    //0,1,2,3,4
        rejectionReason: 'Your Announcement incorrectly added to our system. Please, add the new one, with right content.', //status: 2
        unpublishReason: unpublishReasonsData[0].id, // otherReason = unpublishReasonsData[1].id , status: 3,4
        unpublishDescription: "Недвижимость Продано. Более детальная информация не предоставляется.",
        unpublishPrice: 3456789,
        unpublishCurrency: currencyData[1].id,
        type: 'flats',
        userId: userId,
        operationType: operationtypesData[0].id,    // Аренда = 0, Продажа = 1
        price: advfs_price,    //true
        currency: currencyData[1].id, //true
        ownerName: advfs_ownerName,    //true
        ownerContacts: advfs_ownerContacts,    //true
        description: Math.random().toString(36).substring(6),
        auction: true,  // true or false
        repair: repairsId,
        bedsCount: advfs_bedsCount,
        furniture: [furnituresId, furnituresData[1].id],
        appliances: [appliancesId, appliancesData[1].id],
        additionally: [additionals_cat0Id, additionals_cat0Data[1].id, additionals_cat0Data[2].id]
        //images: [{id:advertImage}]
    }, {json: true}
    )
    .inspectJSON()
    .inspectRequest()
    //.inspectBody()
    //.inspectResponse()
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        id: String
    })
    .afterJSON(function (json) {
        if (json.id === advertsFlatSaleId ) {
            adverts.saveFlatAdvertSale(json);
        }
    })
    .toss()