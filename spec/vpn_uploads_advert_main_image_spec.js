require('./boot');

var filePath = path.resolve(__dirname, './img/advert_img_2.jpg');
var form = new formData();

form.append('file', fs.createReadStream(filePath), {knownLength: fs.statSync(filePath).size});

frisby.create('Upload advert image')
    .post(URL_advert_image, form, {
        json: false,
        headers: {
            'token': userToken,
            'content-type': 'multipart/form-data; boundary=' + form.getBoundary(),
            'content-length': form.getLengthSync()
        }
    })
    .timeout(10000)
    .inspectJSON()
    .inspectRequest()
    //.inspectBody()
    .expectJSON({
        id: String,
        thumbnails:
            [ { id: String,
                path: String,
                extension: String,
                width: Number,
                mimeType: String,
                height: Number,
                processor: 'adv_thumb_big' },
                { id: String,
                    path: String,
                    extension: String,
                    width: Number,
                    mimeType: String,
                    height: Number,
                    processor: 'adv_thumb_medium' },
                { id: String,
                    path: String,
                    extension: String,
                    width: Number,
                    mimeType: String,
                    height: Number,
                    processor: 'adv_thumb_small'
                }
            ]
        }
    )
    .afterJSON(function (json) {
        images.saveAdvertMainImage(json);
    })
    .toss()

