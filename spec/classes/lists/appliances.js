appliancesTemplate = path.resolve(__dirname, 'appliances_template.json');

exports.getAppliances = function () {
    return jf.readFileSync(appliancesTemplate);
}

exports.saveAppliances = function (appliancesData) {
    return jf.writeFileSync(appliancesTemplate, appliancesData);
}