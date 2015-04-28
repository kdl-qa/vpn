districtsTemplate = path.resolve(__dirname, 'districts_template.json')

exports.getDistricts = function () {
    return jf.readFileSync(districtsTemplate);
}

exports.saveDistricts = function (districtsData) {
    return jf.writeFileSync(districtsTemplate, districtsData);
}