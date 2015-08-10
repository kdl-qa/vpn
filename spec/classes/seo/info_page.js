infoPageTemplate = path.resolve(__dirname, 'info_page.json');
editInfoPageTemplate = path.resolve(__dirname, 'edit_info_page.json');

exports.getInfoPage = function () {
    return jf.readFileSync(infoPageTemplate);
}

exports.saveInfoPage = function (infoPageData) {
    return jf.writeFileSync(infoPageTemplate, infoPageData);
}

exports.getEditInfoPage = function () {
    return jf.readFileSync(editInfoPageTemplate);
}

//exports.saveEditInfoPage = function (editInfoPageData) {
//    return jf.writeFileSync(editInfoPageTemplate, editInfoPageData);
//}