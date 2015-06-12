require('./boot');
frisby.create('Logout Agency')
    .addHeader('token', agencyToken)
    .post(URL_logout)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        message: 'Success'
    })
    .toss()

