category_type3Template = path.resolve(__dirname, 'category_type3_template.json');

exports.getCategory_type3 = function () {
    return jf.readFileSync(category_type3Template);
}

exports.saveCategory_type3 = function (category_type3Data) {
    return jf.writeFileSync(category_type3Template, category_type3Data);
}