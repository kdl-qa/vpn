statusesTemplate = path.resolve(__dirname, 'statuses_template.json');


exports.getStatuses = function () {
    return jf.readFileSync(statusesTemplate);
}

exports.saveStatuses = function (statusesData) {
    return jf.writeFileSync(statusesTemplate, statusesData);
}