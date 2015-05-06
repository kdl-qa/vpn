flatObjectTemplate = path.resolve(__dirname, 'flat_object.json');
houseObjectTemplate = path.resolve(__dirname, 'house_object.json');
parcelObjectTemplate = path.resolve(__dirname, 'parcel_object.json');
commercialObjectTemplate = path.resolve(__dirname, 'commercial_object.json');

exports.getFlatObject = function () {
    return jf.readFileSync(flatObjectTemplate);
}

exports.saveFlatObject = function (flatObjectData) {
    return jf.writeFileSync(flatObjectTemplate, flatObjectData);
}

exports.getHouseObject = function () {
    return jf.readFileSync(houseObjectTemplate);
}

exports.saveHouseObject = function (houseObjectData) {
    return jf.writeFileSync(houseObjectTemplate, houseObjectData);
}

exports.getParcelObject = function () {
    return jf.readFileSync(parcelObjectTemplate);
}

exports.saveParcelObject = function (parcelObjectData) {
    return jf.writeFileSync(parcelObjectTemplate, parcelObjectData);
}

exports.getCommercialObject = function () {
    return jf.readFileSync(commercialObjectTemplate);
}

exports.saveCommercialObject = function (commercialObjectData) {
    return jf.writeFileSync(commercialObjectTemplate, commercialObjectData);
}