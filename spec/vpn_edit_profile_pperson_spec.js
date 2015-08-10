require('./boot');
frisby.create('Edit profile - Private person')
    .addHeader('token', userToken)
    .put(URL_edit_profile_pperson,{
        firstName: editUserFirstName,
        lastName: editUserLastName,
        email: editUserEmail,
        phones: editUserPhones
        //userAvatar: userAvatar
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
    .afterJSON(function (json){
        if (json.firstName == editUserFirstName) {
            user.saveUserData(json);
        }
    })
    .toss()

