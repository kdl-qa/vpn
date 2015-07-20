projectInfoTemplate = path.resolve(__dirname, 'project_info_template.json');


exports.getProjectInfo = function () {
    return jf.readFileSync(projectInfoTemplate);
}

exports.saveProjectInfo = function (projectInfoData) {
    return jf.writeFileSync(projectInfoTemplate, projectInfoData);
}