require('./boot');
var schema = null;
var filePath = path.resolve(__dirname, './img/schema.jpg');
var form = new formData();

form.append('file', fs.createReadStream(filePath), {knownLength: fs.statSync(filePath).size});

frisby.create('Upload Schema image')
    .post(URL_schema_image, form, {
        json: false,
        headers: {
            'token': userToken,
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
            processor: 'schema_big',
            path: String
        },{
            id: String,
            processor: 'schema_small',
            path: String
            }]
    })
    .afterJSON(function (json) {
        images.saveSchema(json);
    })
    .toss()

