additionals_cat0Template = path.resolve(__dirname, 'additionals_cat0_template.json');

exports.getAdditionals_cat0 = function () {
    return jf.readFileSync(additionals_cat0Template);
}

exports.saveAdditionals_cat0 = function (additionals_cat0Data) {
    return jf.writeFileSync(additionals_cat0Template, additionals_cat0Data);
}