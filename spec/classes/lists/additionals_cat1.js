additionals_cat1Template = path.resolve(__dirname, 'additionals_cat1_template.json');

exports.getAdditionals_cat1 = function () {
    return jf.readFileSync(additionals_cat1Template);
}

exports.saveAdditionals_cat1 = function (additionals_cat1Data) {
    return jf.writeFileSync(additionals_cat1Template, additionals_cat1Data);
}