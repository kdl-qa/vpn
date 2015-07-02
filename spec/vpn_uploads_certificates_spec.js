require('./boot');
var certificates = null;
var filePath = path.resolve(__dirname, './img/certificate_image_1.jpg'); //certificate_image_2.jpg
var form = new formData();

form.append('file', fs.createReadStream(filePath), {knownLength: fs.statSync(filePath).size});

frisby.create('Upload Certificate image')
    .post(URL_certificates_image, form, {
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
        thumbnails: [{
            id: String,
            processor: 'certificate_small',
            path: String
        },{
            id: String,
            processor: 'certificate_big',
            path: String
            }]
    })
    .afterJSON(function (json) {
        images.saveCertificate(json);
    })
    .toss()

