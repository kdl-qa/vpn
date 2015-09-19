require('./boot');
frisby.create('Login Private Person')
    .post(URL_login, {
        email: userEmail,
        password: "UAYzw_mV"
    }, {json: true})
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        id: String,
        firstName: String,
        lastName: String,
        email: String,
        token: String,
        userType: 'private person'
    })
    .afterJSON(function (json) {
        if (json.firstName == userFirstName) { // json['status']
            user.saveUserData(json);
        }
    })
    .toss()

