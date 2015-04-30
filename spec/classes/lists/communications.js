communicationsTemplate = path.resolve(__dirname, 'communications_template.json');


exports.getCommunications = function () {
    return jf.readFileSync(communicationsTemplate);
}

exports.saveCommunications = function (communicationsData) {
    return jf.writeFileSync(communicationsTemplate, communicationsData);
}