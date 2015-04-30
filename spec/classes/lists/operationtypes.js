operationtypesTemplate = path.resolve(__dirname, 'operation_types_template.json');

exports.getOperationTypes = function () {
    return jf.readFileSync(operationtypesTemplate);
}

exports.saveOperationTypes = function (operationtypesData) {
    return jf.writeFileSync(operationtypesTemplate, operationtypesData);
}