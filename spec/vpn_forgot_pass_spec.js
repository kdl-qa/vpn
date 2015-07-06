require('./boot');
frisby.create('PUT - Forgot-password')
    .put(URL_forgot_password, {
        email: userEmail
    }, {'json': true})
    .inspectJSON()
    //.inspectResponse()
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({message: 'Success'})
    .toss()
