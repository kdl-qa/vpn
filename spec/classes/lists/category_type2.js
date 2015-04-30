category_type2Template = path.resolve(__dirname, 'category_type2_template.json');

exports.getCategory_type2 = function () {
    return jf.readFileSync(category_type2Template);
}

exports.saveCategory_type2 = function (category_type2Data) {
    return jf.writeFileSync(category_type2Template, category_type2Data);
}