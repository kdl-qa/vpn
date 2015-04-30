nearobjectsTemplate = path.resolve(__dirname, 'near_objects_template.json');

exports.getNearObjects = function () {
    return jf.readFileSync(nearobjectsTemplate);
}

exports.saveNearObjects = function (nearobjectsData) {
    return jf.writeFileSync(nearobjectsTemplate, nearobjectsData);
}