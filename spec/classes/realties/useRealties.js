flatObjectTemplate = path.resolve(__dirname, 'flat_object.json')

exports.getFlatObject = function () {
    return jf.readFileSync(flatObjectTemplate);
}

exports.saveFlatObject = function (flatObjectData) {
    return jf.writeFileSync(flatObjectTemplate, flatObjectData);
}