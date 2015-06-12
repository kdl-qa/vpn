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
        //userAvatar: userAvatar,
        //logo: ,
        schedule: agencySchedule,
        socialAccounts: agencySocialNetworks,
        //description: ,
        //socialAccounts: ,
        //userAvatar: ,
        //logo: ,
        offices:[
            {
                officeName: agencyName,
                region: regionsId,
                city: citiesId,
                address: agencyOfficeAddress,
                officeNumbers: agencyOfficeNumber,
                coordinates: agencyOfficeCoordinates,
                phones: agencyOfficesPhones
            },
            {
                officeName: agencyData.offices[1].name,
                region: regionsId,
                city: citiesId,
                address: agencyData.offices[1].address,
                officeNumbers: agencyData.offices[1].number,
                coordinates: agencyData.offices[1].coordinates,
                phones: agencyData.offices[1].phones
            }
        ]
    }, {json: true})
    .inspectJSON()
    .inspectBody()
    .inspectRequest()
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
        schedule: Array,
        socialAccounts: Array
    })
    .afterJSON(function (json) {
        if (json.firstName == agencyFirstName) {
            user.saveAgencyData(json);
        }
    })
    .toss()
