require('./boot');
frisby.create('PUT - Change-password')
    .addHeader('token', agencyToken)// agencyToken|agentToken|userToken
    .put(URL_change_password, {
        oldPassword: 'qwaszx12',
        newPassword: 'api123' //launch vpn_login_(role) to check password changing
    }, {'json': true})
    .inspectJSON()
    .inspectRequest()
    //.inspectResponse()
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({message: 'Success'})
    .toss()
