currencyTemplate = path.resolve(__dirname, 'currency_template.json');
actualCurrencyTemplate = path.resolve(__dirname, 'actual_currency_template.json');

exports.getCurrency = function () {
    return jf.readFileSync(currencyTemplate);
}

exports.saveCurrency = function (currencyData) {
    return jf.writeFileSync(currencyTemplate, currencyData);
}

exports.getActualCurrency = function () {
    return jf.readFileSync(actualCurrencyTemplate);
}

exports.saveActualCurrency = function (actualCurrencyData) {
    return jf.writeFileSync(actualCurrencyTemplate, actualCurrencyData);
}