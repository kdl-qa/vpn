require('./boot');
frisby.create('Check Parcels object')
    .addHeader('token', userToken)
    .post(URL_realties_parcels_check,
    {
        category: category_type2CategoryId,	//true
        categoryType: category_type2Id, //true
        cadastralNumber: apr_cadastralNumber
    }, {json: true}
    )
    .inspectRequest()
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        id: String
    })
    //.afterJSON(function (json) {
    //    useRealties.saveFlatObject(json);
    //})
    .toss()