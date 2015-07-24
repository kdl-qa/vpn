require('./boot');
var name = String;
frisby.create('Info page delete')
    .addHeader('token', adminToken)
    .delete(URL_info_pages_delete)
    //.inspectRequest()
    .inspectJSON()
    //.inspectBody()
    //.inspectResponse()
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    .afterJSON(function (json) {
        info_page.saveInfoPage({});
    })
    .toss()
