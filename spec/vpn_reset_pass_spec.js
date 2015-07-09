require('./boot');
frisby.create('PUT - Reset-password')
    .put(URL_reset_password, {
        token: '6PdmZYf0nqNuiXGKq5D-uNXaY83cyzr36JUAaiQErUo', // after forgot password -> from email | from MongoDB - confirmationToken (users)
        password: 'qwaszx123' // new password
    }, {'json': true})
    .inspectJSON()
    //.inspectResponse()
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({message: 'Success'})
    .toss()
