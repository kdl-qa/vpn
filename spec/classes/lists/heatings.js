heatingsTemplate = path.resolve(__dirname, 'heatings_template.json');

exports.getHeatings = function () {
    return jf.readFileSync(heatingsTemplate);
}

exports.saveHeatings = function (heatingsData) {
    return jf.writeFileSync(heatingsTemplate, heatingsData);
}