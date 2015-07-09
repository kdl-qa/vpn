require('./boot');
frisby.create('Edit Agency services and certificates')
    .addHeader('token', agencyToken)
    .post(URL_edit_profile_services,
    {
        services: [{
            title: "Lorem ipsum dolor sit amet",
            description: "Efficiently implement high standards in e-services via enterprise-wide schemas. Holisticly deploy out-of-the-box alignments with 24/7 quality vectors."
        }],
        certificates: [{
            title: "certificate 1",
            image: certificate1
        },
        {
            title: "certificate 2",
            image: certificate2
        }]
    }, {json: true}
    )
    .inspectRequest()
    .inspectJSON()
    .inspectBody()
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    //.expectJSONTypes({
    //    id: String,
    //    name: String,
    //    slug: String,
    //    advert: Array
    //})
    //.afterJSON(function (json) {
    //    if (json.id === advertsListId ) {
    //        adverts.saveAdvertList(json);
    //    }
    //})
    .toss()
