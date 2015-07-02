require('./boot');
frisby.create('Edit Profile. Agent of the Agency')
    .addHeader('token', agentToken)
    .put(URL_edit_profile_agents,{
        firstName: editAgentFirstName,
        lastName: editAgentLastName,
        email: editAgentEmail,
        phones: editAgentPhones
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
        if (json.firstName == editAgentFirstName) {
            user.saveAgentData(json);
        }
    })
    .toss()

