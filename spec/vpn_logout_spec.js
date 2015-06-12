require('./boot');
frisby.create('Logout Private Person')
    .addHeader('token', userToken)
    .post(URL_logout)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        message: 'Success'
    })
    .toss()
