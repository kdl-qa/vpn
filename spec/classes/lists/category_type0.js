category_type0Template = path.resolve(__dirname, 'category_type0_template.json');

exports.getCategory_type0 = function () {
    return jf.readFileSync(category_type0Template);
}

exports.saveCategory_type0 = function (category_type0Data) {
    return jf.writeFileSync(category_type0Template, category_type0Data);
}