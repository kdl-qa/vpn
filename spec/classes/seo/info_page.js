infoPageTemplate = path.resolve(__dirname, 'info_page.json');

exports.getInfoPage = function () {
    return jf.readFileSync(infoPageTemplate);
}

exports.saveInfoPage = function (infoPageData) {
    return jf.writeFileSync(infoPageTemplate, infoPageData);
}