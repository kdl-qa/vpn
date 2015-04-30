flatsTemplate = path.resolve(__dirname, 'flat_numbers_template.json')

exports.getFlats = function () {
    return jf.readFileSync(flatsTemplate);
}

exports.saveFlats = function (flatsData) {
    return jf.writeFileSync(flatsTemplate, flatsData);
}
