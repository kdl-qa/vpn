require('./boot');
var name = String;
frisby.create('Adverts list delete advert')
    .addHeader('token', userToken)
    .delete(URL_adverts_list_delete_advert)
    //.inspectRequest()
    .inspectJSON()
    .inspectBody()
    //.inspectResponse()
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    .afterJSON(function (json) {
            adverts.updateAdvertList(advertsFlatSaleId);
    })
    .toss()
