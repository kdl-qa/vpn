category_type1Template = path.resolve(__dirname, 'category_type1_template.json');

exports.getCategory_type1 = function () {
    return jf.readFileSync(category_type1Template);
}

exports.saveCategory_type1 = function (category_type1Data) {
    return jf.writeFileSync(category_type1Template, category_type1Data);
}