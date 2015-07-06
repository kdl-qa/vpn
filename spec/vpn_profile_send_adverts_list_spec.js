require('./boot');
frisby.create('Send Adverts List to Client')
    .addHeader('token', userToken)
    .post(URL_profiles_send_list_adverts,{
        email: advertsSendListEmail,
        subject: advertsSendListSubject,
        text: advertsSendListText
    },{json: true})
    .inspectJSON()
    .inspectRequest()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .toss()