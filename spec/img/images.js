userAvatarTemplate = path.resolve(__dirname, 'user_avatar.json');
agencyAvatarTemplate = path.resolve(__dirname, 'agency_avatar.json');
//agentAvatarTemplate = path.resolve(__dirname, 'agent_avatar.json');
schemaTemplate = path.resolve(__dirname, 'schema_image.json');


exports.getUserAvatar = function () {
    return jf.readFileSync(userAvatarTemplate);
}

exports.saveUserAvatar = function (userAvatarData) {
    return jf.writeFileSync(userAvatarTemplate, userAvatarData);
}

exports.getAgencyAvatar = function () {
    return jf.readFileSync(agencyAvatarTemplate);
}

exports.saveAgencyAvatar = function (agencyAvatarData) {
    return jf.writeFileSync(agencyAvatarTemplate, agencyAvatarData);
}

//exports.getAgentAvatar = function () {
//    return jf.readFileSync(agentAvatarTemplate);
//}
//
//exports.saveAgentAvatar = function (agentAvatarData) {
//    return jf.writeFileSync(agentAvatarTemplate, agentAvatarData);
//}


exports.getSchema = function () {
    return jf.readFileSync(schemaTemplate);
}

exports.saveSchema = function (schemaData) {
    return jf.writeFileSync(schemaTemplate, schemaData);
}