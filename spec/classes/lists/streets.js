streetsTemplate = path.resolve(__dirname, 'streets_template.json')

exports.getStreets = function () {
    return jf.readFileSync(streetsTemplate);
}

exports.saveStreets = function (streetsData) {
    return jf.writeFileSync(streetsTemplate, streetsData);
}
