marketsTemplate = path.resolve(__dirname, 'market_types_template.json');

exports.getMarkets = function () {
    return jf.readFileSync(marketsTemplate);
}

exports.saveMarkets = function (marketsData) {
    return jf.writeFileSync(marketsTemplate, marketsData);
}