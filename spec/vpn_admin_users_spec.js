require('./boot');
frisby.create('Admin - Get User Statistics')
    .addHeader('token', adminToken)
    .get(URL_admin_users +
    '?role=ROLE_AGENT' + // ROLE_PRIVATE_PERSON|ROLE_AGENT|ROLE_AGENCY
    //'&text=tiana' +   // firsName|lastName|email
    '&status=false')    // true|false
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        total: Number,
        count: Number,
        page: Number,
        data: Array
    })
    .toss()