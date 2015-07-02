require('./boot');
frisby.create('Registration. Agent of the Agency')
    .addHeader('token', agencyToken)
    .post(URL_registration_agent,{
        firstName: agentFirstName,
        lastName: agentLastName,
        email: agentEmail,
        plainPassword: agentPassword,
        phones: agentPhones
        //userAvatar: agentAvatar
    }, {json: true})
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        id: String,
        firstName: String,
        lastName: String,
        email: String,
        token: String,
        phones: Array,
        userType: 'agent'
    })
    .afterJSON(function (json) {
        if (json.firstName == agentFirstName) {
            user.saveAgentData(json);
        }
    })
    .toss()

