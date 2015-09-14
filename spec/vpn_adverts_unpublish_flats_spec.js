require('./boot');
frisby.create('Unpublish Flat advert (sale)')
    .addHeader('token', agencyToken)
    .post(URL_adverts_flats_unpublish,
    {
        unpublishReason: unpublishReasonsId,
        unpublishPrice: 100500,
        unpublishDescription: "Deal finished",
        unpublishCurrency: currencyId
    }, {json: true}
    )
    .inspectJSON()
    .inspectBody()
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