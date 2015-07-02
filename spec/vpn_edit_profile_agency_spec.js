require('./boot');
frisby.create('Edit Agency Profile')
    .addHeader('token', agencyToken)
    .put(URL_edit_profile_agencies,{
        name: editAgencyName,
        firstName: editAgencyFirstName,
        lastName: editAgencyLastName,
        email: editAgencyEmail,
        plainPassword: editAgencyPassword,
        schedule: editAgencySchedule,
        socialAccounts: editAgencySocialNetworks,
        description: editAgencyDescription,
        //userAvatar: userAvatar,
        //logo: ,
        offices:[
            {
                officeName: editAgencyData.offices[0].name,
                region: regionsId,
                city: citiesId,
                address: editAgencyData.offices[0].address,
                officeNumbers: editAgencyData.offices[0].numbers,
                coordinates: editAgencyData.offices[0].coordinates,
                phones: editAgencyData.offices[0].phones
            },
            {
                officeName: editAgencyData.offices[1].name,
                region: regionsId,
                city: citiesId,
                address: editAgencyData.offices[1].address,
                officeNumbers: editAgencyData.offices[1].numbers,
                coordinates: editAgencyData.offices[1].coordinates,
                phones: editAgencyData.offices[1].phones
            },
            {
                officeName: editAgencyData.offices[2].name,
                region: regionsId,
                city: citiesId,
                address: editAgencyData.offices[2].address,
                officeNumbers: editAgencyData.offices[2].numbers,
                coordinates: editAgencyData.offices[2].coordinates,
                phones: editAgencyData.offices[2].phones
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
        if (json.firstName == editAgencyFirstName) {
            user.saveAgencyData(json);
        }
    })
    .toss()