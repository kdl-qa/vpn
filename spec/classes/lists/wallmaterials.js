wallmaterialsTemplate = path.resolve(__dirname, 'wall_materials_template.json');

exports.getWallMaterials = function () {
    return jf.readFileSync(wallmaterialsTemplate);
}

exports.saveWallMaterials = function (wallmaterialsData) {
    return jf.writeFileSync(wallmaterialsTemplate, wallmaterialsData);
}