require('./boot');

var filePath = path.resolve(__dirname, './img/advert_img_1.jpg');
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
    .expectJSON({
        id: String,
        thumbnails:
            [ { id: String,
                path: String,
                extension: String,
                width: Number,
                mimeType: String,
                height: Number,
                processor: 'advert_thumb_big' },
                { id: String,
                    path: String,
                    extension: String,
                    width: Number,
                    mimeType: String,
                    height: Number,
                    processor: 'advert_thumb_medium' },
                { id: String,
                    path: String,
                    extension: String,
                    width: Number,
                    mimeType: String,
                    height: Number,
                    processor: 'advert_thumb_small' } ]
    })
    .toss()

/**
 {
    id: '5530abd7d69b5ae00d8b4568',
    thumbnails:
        [ { id: '5530abd7d69b5ae00d8b4569',
           path: '/uploads/thumbnail/advert_thumb_big/14/29/25/30/78/1429253078.jpeg',
           extension: '.jpeg',
           width: 1024,
           mimeType: 'image/jpeg',
           height: 768,
           processor: 'advert_thumb_big' },
         { id: '5530abd7d69b5ae00d8b456a',
           path: '/uploads/thumbnail/advert_thumb_medium/14/29/25/30/78/1429253078.jpeg',
           extension: '.jpeg',
           width: 512,
           mimeType: 'image/jpeg',
           height: 384,
           processor: 'advert_thumb_medium' },
         { id: '5530abd7d69b5ae00d8b456b',
           path: '/uploads/thumbnail/advert_thumb_small/14/29/25/30/79/1429253079.jpeg',
           extension: '.jpeg',
           width: 256,
           mimeType: 'image/jpeg',
           height: 192,
           processor: 'advert_thumb_small' } ]
}
 */