require('./boot');
frisby.create('Registration. Private person')
    .post(URL_registration_pperson,{
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        plainPassword: userPassword,
        phones: userPhones,
        userAvatar: userAvatar
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
        userType: 'private person'
    })
    .afterJSON(function (json) {
        if (json.firstName == userFirstName) { // json['status']
            user.saveUserData(json);
        }
    })
    .toss()

