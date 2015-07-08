require('./boot');
frisby.create('Login Agent')
    .post(URL_login, {
        email: agentEmail,
        password: agentPassword
    }, {json: true})
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        id: String,
        firstName: String,
        lastName: String,
        email: String,
        phones: Array,
        token: String,
        userType: 'agent'
    })
    .afterJSON(function (json) {
        if (json.firstName == agentFirstName) { // json['status']
            user.saveAgentData(json);
        }
    })
    .toss()

