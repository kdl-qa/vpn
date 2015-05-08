periodsTemplate = path.resolve(__dirname, 'periods_template.json');

exports.getPeriods = function () {
    return jf.readFileSync(periodsTemplate);
}

exports.savePeriods = function (periodsData) {
    return jf.writeFileSync(periodsTemplate, periodsData);
}