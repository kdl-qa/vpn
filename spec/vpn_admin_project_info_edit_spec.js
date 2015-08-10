require('./boot');
frisby.create('Project Info Edit')
    .addHeader('token', adminToken)
    .put(URL_project_info_edit,
    {
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
        homepageH1:projectInfoData.homepageH1,
        homepageContent:projectInfoData.homepageContent,
        homepageTitle:projectInfoData.homepageTitle,
        homepageDescription:projectInfoData.homepageDescription,
        //homepageKeywords:projectInfoData.homepageKeywords
        logo: userAvatar
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