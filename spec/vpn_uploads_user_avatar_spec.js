require('./boot');

var filePath = path.resolve(__dirname, './img/user_avatar.jpg');
var form = new formData();

form.append('file', fs.createReadStream(filePath), {knownLength: fs.statSync(filePath).size});

frisby.create('Upload User avatar')
    .post(URL_user_avatar, form, {
        json: false,
        headers: {
            'token': userToken,
            'content-type': 'multipart/form-data; boundary=' + form.getBoundary(),
            'content-length': form.getLengthSync()
        }
    })
    .timeout(10000)
    .inspectJSON()
    .expectJSON({
        id: String,
        thumbnails: {
            id: String,
            processor: 'user_avatar',
            path: String
        }
    })
    .toss()

/**
 {
 id: '5530af45d69b5a25268b4567',
 thumbnails:
   { id: '5530af45d69b5a25268b4568',
     processor: 'user_avatar',
     path: '/uploads/thumbnail/user_avatar/14/29/25/39/57/1429253957.jpeg' }
}
 */