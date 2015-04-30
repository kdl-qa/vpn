repairsTemplate = path.resolve(__dirname, 'repairs_template.json');

exports.getRepairs = function () {
    return jf.readFileSync(repairsTemplate);
}

exports.saveRepairs = function (repairsData) {
    return jf.writeFileSync(repairsTemplate, repairsData);
}