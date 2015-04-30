waterheatTemplate = path.resolve(__dirname, 'water_heatings_template.json');

exports.getWaterHeatings = function () {
    return jf.readFileSync(waterheatTemplate);
}

exports.saveWaterHeatings = function (waterheatData) {
    return jf.writeFileSync(waterheatTemplate, waterheatData);
}