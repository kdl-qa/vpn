realtiesTemplate = path.resolve(__dirname, 'realties.json');

exports.getRealties = function () {
    return jf.readFileSync(realtiesTemplate);
}