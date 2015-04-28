require('./boot');
frisby.create('Delete advert image')
    .addHeader('token', userToken)
    .delete(URL_delete_image)
    //.inspectRequest()
    .inspectJSON()
    .inspectBody()
    .inspectStatus()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON(
        {
         message : String
        }
    )
    .toss()