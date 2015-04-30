housesTemplate = path.resolve(__dirname, 'house_numbers_template.json')

exports.getHouses = function () {
    return jf.readFileSync(housesTemplate);
}

exports.saveHouses = function (housesData) {
    return jf.writeFileSync(housesTemplate, housesData);
}
