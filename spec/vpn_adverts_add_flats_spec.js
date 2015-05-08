//require('./boot');
//frisby.create('Add Flat advert')
//    .addHeader('token', userToken)
//    .post(URL_adverts_flats_add,
//    {
//        title: ,
//        operationType: ,
//        period: ,
//        price: ,
//        currency: ,
//        availableFrom: ,
//        ownerName: ,
//        ownerContacts: ,
//        description: ,
//        auction: ,
//        repair: ,
//        bedsCount: ,
//        furniture: ,
//        appliances: ,
//        additionally:
//        //images: "",
//        //mainImage: ""
//    }, {json: true}
//    )
//    .inspectRequest()
//    .inspectJSON()
//    .expectHeader('Content-Type', 'application/json')
//    .expectJSON({
//        id: String
//    })
//    .afterJSON(function (json) {
//        useRealties.saveHouseObject(json);
//    })
//    .toss()