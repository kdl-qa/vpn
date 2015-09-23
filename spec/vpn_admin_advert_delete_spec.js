require('./boot');
var name = String;
frisby.create('Advert delete')
    .addHeader('token', adminToken)
    .delete(URL_admin_advert_delete)
    //.inspectRequest()
    .inspectJSON()
    //.inspectBody()
    //.inspectResponse()
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    .afterJSON(function (json) {
            adverts.saveAdvertList({});
    })
    .toss()
