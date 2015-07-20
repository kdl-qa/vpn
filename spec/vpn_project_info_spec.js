require('./boot');
frisby.create('Get Project Info')
    .get(URL_project_info)
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON(
        {
            name: String
        }
    )
    .afterJSON(function (json) {
        project_info.saveProjectInfo(json);
    })
    .toss()