require('./boot');
frisby.create('Registration Agency by Admin')
    .addHeader('token', adminToken)
    .post(URL_registration_agency,{
        name: agencyName,
        subdomain: agencySubdomain,
        firstName: agencyFirstName,
        lastName: agencyLastName,
        email: agencyEmail,
        plainPassword: agencyPassword,
        schedule: agencySchedule,
        socialAccounts: agencySocialNetworks,
        description: agencyDescription,
        userAvatar: agencyAvatar,
        //logo: ,
        offices:[
            {
                officeName: agencyData.offices[0].name,
                region: regionsId,
                city: citiesId,
                address: agencyData.offices[0].address,
                officeNumbers: agencyData.offices[0].numbers,
                coordinates: agencyData.offices[0].coordinates,
                phones: agencyData.offices[0].phones
            },
            {
                officeName: agencyData.offices[1].name,
                region: regionsId,
                city: citiesId,
                address: agencyData.offices[1].address,
                officeNumbers: agencyData.offices[1].numbers,
                coordinates: agencyData.offices[1].coordinates,
                phones: agencyData.offices[1].phones
            }
        ]
    }, {json: true})
    .inspectJSON()
    .inspectBody()
    //.inspectRequest()
    .expectHeader('Content-Type', 'application/json')
    .expectJSONTypes({
        id: String,
        name: String,
        subdomain: String,
        firstName: String,
        lastName: String,
        description: String,
        email: String,
        token: String,
        userType: 'agency',
        offices: Array,
        schedule: Array,
        socialAccounts: Array
    })
    .afterJSON(function (json) {
        if (json.firstName == agencyFirstName) {
            user.saveAgencyData(json);
        }
    })
    .toss()
