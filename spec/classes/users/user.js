userTemplate = path.resolve(__dirname, 'user_template.json');
agencyTemplate = path.resolve(__dirname, 'agency_template.json');
agentTemplate = path.resolve(__dirname, 'agent_template.json');
authUserTemplate = path.resolve(__dirname, 'auth_user_template.json');
authAgencyTemplate = path.resolve(__dirname, 'auth_agency_template.json');
authAgentTemplate = path.resolve(__dirname, 'auth_agent_template.json');

exports.getUser = function () {
    return jf.readFileSync(userTemplate);
}

exports.getAgency = function () {
    return jf.readFileSync(agencyTemplate);
}

exports.getAgent = function () {
    return jf.readFileSync(agentTemplate);
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


exports.saveUserData = function (userData) {
    return jf.writeFileSync(authUserTemplate, userData);
}

exports.saveAgencyData = function (agencyData) {
    return jf.writeFileSync(authAgencyTemplate, agencyData);
}

exports.saveAgentData = function (agentData) {
    return jf.writeFileSync(authAgentTemplate, agentData);
}
