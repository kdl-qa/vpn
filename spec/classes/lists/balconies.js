balconiesTemplate = path.resolve(__dirname, 'balconies_template.json');


exports.getBalconies = function () {
    return jf.readFileSync(balconiesTemplate);
}

exports.saveBalconies = function (balconiesData) {
    return jf.writeFileSync(balconiesTemplate, balconiesData);
}