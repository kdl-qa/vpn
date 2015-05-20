flatAdvertSaleTemplate = path.resolve(__dirname, 'flat_sale_adverts.json');
flatAdvertRentTemplate = path.resolve(__dirname, 'flat_rent_adverts.json');
houseAdvertSaleTemplate = path.resolve(__dirname, 'house_sale_adverts.json');
houseAdvertRentTemplate = path.resolve(__dirname, 'house_rent_adverts.json');
parcelAdvertSaleTemplate = path.resolve(__dirname, 'parcel_sale_adverts.json');
parcelAdvertRentTemplate = path.resolve(__dirname, 'parcel_rent_adverts.json');
commercialAdvertSaleTemplate = path.resolve(__dirname, 'commercial_sale_adverts.json');
commercialAdvertRentTemplate = path.resolve(__dirname, 'commercial_rent_adverts.json');

flatAdvertsOptions = path.resolve(__dirname, 'flat_options.json');
houseAdvertsOptions = path.resolve(__dirname, 'house_options.json');
parcelAdvertsOptions = path.resolve(__dirname, 'parcel_options.json');
commercialAdvertsOptions = path.resolve(__dirname, 'commercial_options.json');


exports.getFlatAdvertSale = function () {
    return jf.readFileSync(flatAdvertSaleTemplate);
}

exports.saveFlatAdvertSale = function (flatSaleAdvertData) {
    return jf.writeFileSync(flatAdvertSaleTemplate, flatSaleAdvertData);
}


exports.getFlatAdvertRent = function () {
    return jf.readFileSync(flatAdvertRentTemplate);
}

exports.saveFlatAdvertRent = function (flatRentAdvertData) {
    return jf.writeFileSync(flatAdvertRentTemplate, flatRentAdvertData);
}

exports.getHouseAdvertSale = function () {
    return jf.readFileSync(houseAdvertSaleTemplate);
}

exports.saveHouseAdvertSale = function (houseSaleAdvertData) {
    return jf.writeFileSync(houseAdvertSaleTemplate, houseSaleAdvertData);
}

exports.getHouseAdvertRent = function () {
    return jf.readFileSync(houseAdvertRentTemplate);
}

exports.saveHouseAdvertRent = function (houseRentAdvertData) {
    return jf.writeFileSync(houseAdvertRentTemplate, houseRentAdvertData);
}


exports.getParcelAdvertSale = function () {
    return jf.readFileSync(parcelAdvertSaleTemplate);
}

exports.saveParcelAdvertSale = function (parcelSaleAdvertData) {
    return jf.writeFileSync(parcelAdvertSaleTemplate, parcelSaleAdvertData);
}

exports.getParcelAdvertRent = function () {
    return jf.readFileSync(parcelAdvertRentTemplate);
}

exports.saveParcelAdvertRent = function (parcelRentAdvertData) {
    return jf.writeFileSync(parcelAdvertRentTemplate, parcelRentAdvertData);
}

exports.getCommercialAdvertSale = function () {
    return jf.readFileSync(commercialAdvertSaleTemplate);
}

exports.saveCommercialAdvertSale = function (commercialSaleAdvertData) {
    return jf.writeFileSync(commercialAdvertSaleTemplate, commercialSaleAdvertData);
}

exports.getCommercialAdvertRent = function () {
    return jf.readFileSync(commercialAdvertRentTemplate);
}

exports.saveCommercialAdvertRent = function (commercialRentAdvertData) {
    return jf.writeFileSync(commercialAdvertRentTemplate, commercialRentAdvertData);
}

exports.getFlatsOptions = function () {
    return jf.readFileSync(flatAdvertsOptions);
}

exports.getHousesOptions = function () {
    return jf.readFileSync(houseAdvertsOptions);
}

exports.getParcelsOptions = function () {
    return jf.readFileSync(parcelAdvertsOptions);
}

exports.getCommercialsOptions = function () {
    return jf.readFileSync(commercialAdvertsOptions);
}