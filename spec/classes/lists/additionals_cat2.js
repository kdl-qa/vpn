additionals_cat2Template = path.resolve(__dirname, 'additionals_cat2_template.json');

exports.getAdditionals_cat2 = function () {
    return jf.readFileSync(additionals_cat2Template);
}

exports.saveAdditionals_cat2 = function (additionals_cat2Data) {
    return jf.writeFileSync(additionals_cat2Template, additionals_cat2Data);
}