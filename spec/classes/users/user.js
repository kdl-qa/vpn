userTemplate = path.resolve(__dirname, 'user_template.json');
agencyTemplate = path.resolve(__dirname, 'agency_template.json');
agentTemplate = path.resolve(__dirname, 'agent_template.json');
adminTemplate = path.resolve(__dirname, 'admin_template.json');
authUserTemplate = path.resolve(__dirname, 'auth_user_template.json');
authAgencyTemplate = path.resolve(__dirname, 'auth_agency_template.json');
authAgentTemplate = path.resolve(__dirname, 'auth_agent_template.json');
authAdminTemplate = path.resolve(__dirname, 'auth_admin_template.json');

editUserTemplate = path.resolve(__dirname, 'edit_user_template.json');

exports.getUser = function () {
    return jf.readFileSync(userTemplate);
}

exports.getAgency = function () {
    return jf.readFileSync(agencyTemplate);
}

exports.getAgent = function () {
    return jf.readFileSync(agentTemplate);
}

exports.getAdmin = function () {
    return jf.readFileSync(adminTemplate);
}


exports.getUserData1 = function () {
    return jf.readFileSync(authUserTemplate);
}

exports.getAgencyData = function () {
    return jf.readFileSync(authAgencyTemplate);
}

exports.getAgentData = function () {
    return jf.readFileSync(authAgentTemplate);
}

exports.getAdminData = function () {
    return jf.readFileSync(authAdminTemplate);
}

exports.saveUserData = function (userData) {
    return jf.writeFileSync(authUserTemplate, userData);
}

exports.saveAgencyData = function (agencyData) {
    return jf.writeFileSync(authAgencyTemplate, agencyData);
}

exports.saveAgentData = function (agentData) {
    return jf.writeFileSync(authAgentTemplate, agentData);
}

exports.saveAdminData = function (adminData) {
    return jf.writeFileSync(authAdminTemplate, adminData);
}

exports.getEditUser = function () {
    return jf.readFileSync(editUserTemplate);
}
