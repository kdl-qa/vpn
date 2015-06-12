require('./boot');
frisby.create('Back office Login test')
    .post(URL_login_admin, {
        email: adminEmail,
        password: adminPassword
    }, {json: true})
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        id: String,
        firstName: String,
        lastName: String,
        email: String,
        token: String,
        userType: 'admin'
    })
    .afterJSON(function (json) {
        if (json.email == adminEmail) { // json['status']
            user.saveAdminData(json);
        }
    })
    .toss()
