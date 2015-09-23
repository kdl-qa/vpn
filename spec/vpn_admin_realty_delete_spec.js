require('./boot');
var name = String;
frisby.create('Realty delete')
    .addHeader('token', adminToken)
    .delete(URL_admin_realty_delete)
    //.inspectRequest()
    .inspectJSON()
    //.inspectBody()
    //.inspectResponse()
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    .afterJSON(function (json) {
        if (Object.keys(json).length === 0) {
            useRealties.saveFlatObject({});
        }
    })
    .toss()
