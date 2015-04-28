categoriesTemplate = path.resolve(__dirname, 'categories_template.json')

exports.getCategories = function () {
    return jf.readFileSync(categoriesTemplate);
}

exports.saveCategories = function (categoriesData) {
    return jf.writeFileSync(categoriesTemplate, categoriesData);
}

/**userTemplate = path.resolve(__dirname, 'user_template.json');
authTemplate = path.resolve(__dirname, 'auth_user_template.json');
checkPassTemplate = path.resolve(__dirname, 'check_pass_template.json');
//checkPassTemplate = path.resolve(__dirname, 'check_pass_template.json');

exports.getUser = function () {
    return jf.readFileSync(userTemplate);
}

exports.getUserData1 = function () {
    return jf.readFileSync(authTemplate);
}

exports.getRestoreData = function () {
    return jf.readFileSync(checkPassTemplate);
}

exports.saveUser = function (userData) {
    return jf.writeFileSync(userTemplate, userData);
}

exports.saveUserData1 = function (loginData) {
    return jf.writeFileSync(authTemplate, loginData);
}

exports.saveRestoreData = function (restoreData) {
    return jf.writeFileSync(checkPassTemplate, restoreData);
}
*/
