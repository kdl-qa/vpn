require('./boot');
frisby.create('Project Info Edit')
    .addHeader('token', adminToken)
    .put(URL_project_info_edit,
    {
        name:"edited",
        address:projectInfoData.address,
        schedule:projectInfoData.schedule,
        phones:projectInfoData.phones,
        emails:projectInfoData.emails,
        vk:projectInfoData.vk,
        ok:projectInfoData.ok,
        facebook:projectInfoData.facebook,
        twitter:projectInfoData.twitter,
        google:projectInfoData.google,
        copyright:projectInfoData.copyright,
        logo:projectInfoDataLogoId
    }, {json: true})
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