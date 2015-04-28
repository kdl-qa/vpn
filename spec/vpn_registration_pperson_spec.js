require('./boot');
frisby.create('Registration. Private person')
    .post(URL_registration_private_person,{
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        password: userPassword,
        phone: userPhone
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
        userType: 'private person'
    })
    .toss()

/**
 {
     id: "5523cd18d307cc2c058b4578"
     firstName: "Vasya"
     lastName: "Pupkin"
     email: "1vads1f1ek@mail.com"
     phone: "111342423423423"
     userAvatar: "/uploads/thumbnail/user_avatar/14/28/40/93/31/1428409331.jpeg"
     token: "2ditdppNq1OL3i8GrpeBRj8tZefOBIxktUXLNc1LAhI"
     userType: "private person"
 }
 */