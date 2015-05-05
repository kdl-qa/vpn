realtyFlatsTemplate = path.resolve(__dirname, 'flats_realty.json');
realtyHousesTemplate = path.resolve(__dirname, 'houses_realty.json');
realtyCommercialsTemplate = path.resolve(__dirname, 'commercials_realty.json');
realtyParcelsTemplate = path.resolve(__dirname, 'parcels_realty.json');

exports.getFlatsRealties = function () {
    return jf.readFileSync(realtyFlatsTemplate);
}

exports.getHousesRealties = function () {
    return jf.readFileSync(realtyHousesTemplate);
}

exports.getParcelsRealties = function () {
    return jf.readFileSync(realtyParcelsTemplate);
}

exports.getCommercialsRealties = function () {
    return jf.readFileSync(realtyCommercialsTemplate);
}