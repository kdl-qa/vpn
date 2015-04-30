additionals_cat3Template = path.resolve(__dirname, 'additionals_cat3_template.json');

exports.getAdditionals_cat3 = function () {
    return jf.readFileSync(additionals_cat3Template);
}

exports.saveAdditionals_cat3 = function (additionals_cat3Data) {
    return jf.writeFileSync(additionals_cat3Template, additionals_cat3Data);
}