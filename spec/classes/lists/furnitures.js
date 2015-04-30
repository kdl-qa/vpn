furnituresTemplate = path.resolve(__dirname, 'furnitures_template.json');

exports.getFurnitures = function () {
    return jf.readFileSync(furnituresTemplate);
}

exports.saveFurnitures = function (furnituresData) {
    return jf.writeFileSync(furnituresTemplate, furnituresData);
}