regionsTemplate = path.resolve(__dirname, 'regions_template.json')

exports.getRegions = function () {
    return jf.readFileSync(regionsTemplate);
}

exports.saveRegions = function (regionsData) {
    return jf.writeFileSync(regionsTemplate, regionsData);
}
