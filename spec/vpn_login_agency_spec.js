require('./boot');
frisby.create('Login Agency')
    .post(URL_login, {
        email: agencyEmail,
        password: agencyPassword
    }, {json: true})
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSONTypes({
        id: String,
        name: String,
        subdomain: String,
        firstName: String,
        lastName: String,
        email: String,
        token: String,
        userType: 'agency',
        offices: Array,
        schedule: Array
    })
    .afterJSON(function (json) {
        if (json.firstName == agencyFirstName) {
            user.saveAgencyData(json);
        }
    })
    .toss()

