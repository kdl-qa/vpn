require('./boot');
frisby.create('Logout Agent')
    .addHeader('token', agentToken)
    .post(URL_logout)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        message: 'Success'
    })
    .toss()

