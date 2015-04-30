wcTemplate = path.resolve(__dirname, 'wc_template.json');

exports.getWc = function () {
    return jf.readFileSync(wcTemplate);
}

exports.saveWc = function (wcData) {
    return jf.writeFileSync(wcTemplate, wcData);
}