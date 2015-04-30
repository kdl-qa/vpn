currencyTemplate = path.resolve(__dirname, 'currency_template.json');

exports.getCurrency = function () {
    return jf.readFileSync(currencyTemplate);
}

exports.saveCurrency = function (currencyData) {
    return jf.writeFileSync(currencyTemplate, currencyData);
}