flatAdvertTemplate = path.resolve(__dirname, 'flat_advert.json');
houseAdvertTemplate = path.resolve(__dirname, 'house_advert.json');
parcelAdvertTemplate = path.resolve(__dirname, 'parcel_advert.json');
commercialAdvertTemplate = path.resolve(__dirname, 'commercial_advert.json');

flatAdvertsOptions = path.resolve(__dirname, 'flat_options.json');
housesAdvertsOptions = path.resolve(__dirname, 'houses_options.json');
parcelAdvertOptions = path.resolve(__dirname, 'parcels_options.json');
commercialAdvertsOptions = path.resolve(__dirname, 'commercials_options.json');


exports.getFlatAdvert = function () {
    return jf.readFileSync(flatAdvertTemplate);
}

exports.saveFlatAdvert = function (flatAdvertData) {
    return jf.writeFileSync(flatAdvertTemplate, flatAdvertData);
}

//exports.getHouseAdvert = function () {
//    return jf.readFileSync(houseAdvertTemplate);
//}
//
//exports.saveHouseAdvert = function (houseAdvertData) {
//    return jf.writeFileSync(houseAdvertTemplate, houseAdvertData);
//}
//
//exports.getParcelAdvert = function () {
//    return jf.readFileSync(parcelAdvertTemplate);
//}
//
//exports.saveParcelAdvert = function (parcelAdvertData) {
//    return jf.writeFileSync(parcelAdvertTemplate, parcelAdvertData);
//}
//
//exports.getCommercialAdvert = function () {
//    return jf.readFileSync(commercialAdvertTemplate);
//}
//
//exports.saveCommercialAdvert = function (commercialAdvertData) {
//    return jf.writeFileSync(commercialAdvertTemplate, commercialAdvertData);
//}

exports.getFlatsOptions = function () {
    return jf.readFileSync(flatAdvertsOptions);
}
//
//exports.getHousesOptions = function () {
//    return jf.readFileSync(housesAdvertsOptions);
//}
//
//exports.getParcelsOptions = function () {
//    return jf.readFileSync(parcelAdvertOptions);
//}
//
//exports.getCommercialsOptions = function () {
//    return jf.readFileSync(commercialAdvertsOptions);
//}