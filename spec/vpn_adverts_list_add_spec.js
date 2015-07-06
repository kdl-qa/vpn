require('./boot');
var name = String;
frisby.create('Adverts list add adverts')
    .addHeader('token', userToken)
    .post(URL_adverts_list_add_adverts,
    {
        advert: [
            advertsFlatSaleId
        ]
    }, {json: true}
    )
    //.inspectRequest()
    .inspectJSON()
    .inspectBody()
    //.inspectResponse()
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    .expectJSONTypes({
        id: String,
        name: String,
        slug: String,
        advert: Array
    })
    .afterJSON(function (json) {
        if (json.id === advertsListId ) {
            adverts.saveAdvertList(json);
        }
    })
    .toss()
