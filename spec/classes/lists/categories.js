categoriesTemplate = path.resolve(__dirname, 'categories_template.json')

exports.getCategories = function () {
    return jf.readFileSync(categoriesTemplate);
}

exports.saveCategories = function (categoriesData) {
    return jf.writeFileSync(categoriesTemplate, categoriesData);
}
