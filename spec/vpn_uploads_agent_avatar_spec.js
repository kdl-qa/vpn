require('./boot');
var avatar = null;
var filePath = path.resolve(__dirname, './img/agent_avatar.jpg');
var form = new formData();

form.append('file', fs.createReadStream(filePath), {knownLength: fs.statSync(filePath).size});

frisby.create('Upload Agent avatar')
    .post(URL_user_avatar, form, {
        json: false,
        headers: {
            'token': agencyToken,
            'content-type': 'multipart/form-data; boundary=' + form.getBoundary(),
            'content-length': form.getLengthSync()
        }
    })
    .timeout(10000)
    .inspectJSON()
    //.inspectBody()
    .expectJSON({
        id: String,
        thumbnails: {
            id: String,
            processor: 'user_avatar',
            path: String
        }
    })
    .afterJSON(function (json) {
        images.saveAgentAvatar(json);
    })
    .toss()

