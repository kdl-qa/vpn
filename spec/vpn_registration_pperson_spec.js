require('./boot');
frisby.create('Registration. Private person')
    .post(URL_registration_pperson,{
        firstName: userFirstName,
        email: userEmail
    }, {json: true})
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        id: String,
        firstName: String,
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

