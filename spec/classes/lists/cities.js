citiesTemplate = path.resolve(__dirname, 'cities_template.json')

exports.getCities = function () {
    return jf.readFileSync(citiesTemplate);
}

exports.saveCities = function (citiesData) {
    return jf.writeFileSync(citiesTemplate, citiesData);
}
