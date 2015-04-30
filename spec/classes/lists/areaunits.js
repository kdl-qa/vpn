areaunitsTemplate = path.resolve(__dirname, 'area_units_template.json');


exports.getAreaUnits = function () {
    return jf.readFileSync(areaunitsTemplate);
}

exports.saveAreaUnits = function (areaUnitsData) {
    return jf.writeFileSync(areaunitsTemplate, areaUnitsData);
}