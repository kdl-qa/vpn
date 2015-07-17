require('./boot');
frisby.create('Get Announcement Statuses')
    .get(URL_statuses)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    //.expectJSONTypes({
    //    id: String,
    //    name: String
    //})
    .afterJSON(function (json) {
            statuses.saveStatuses(json);
    })
    .toss()
