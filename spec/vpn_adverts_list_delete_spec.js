require('./boot');
var name = String;
frisby.create('Adverts list delete')
    .addHeader('token', userToken)
    .delete(URL_adverts_list_delete)
    //.inspectRequest()
    .inspectJSON()
    .inspectBody()
    //.inspectResponse()
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    .afterJSON(function (json) {
            adverts.saveAdvertList({});
    })
    .toss()
