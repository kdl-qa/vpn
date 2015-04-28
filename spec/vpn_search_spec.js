require('./boot');
frisby.create('Returns search adverts list')
    .post(URL_search_adverts,{
        operationType: '552e78d3d69b5ad57f8b45f5',
        category: '552e78d3d69b5ad57f8b45e2',
        categoryType: '552e78d3d69b5ad57f8b45e6'
    }, {json: true})
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectJSON({
        total: Number,
        count: Number,
        page: Number,
        data: [ {
            id: String,
            title: String,
            operationType:
            { id: String,
                name: String,
                type: String },
            period:
            { id: String,
                name: String },
            mainImage:
            { id: String,
                thumbnails:
                    [ { id: String,
                        processor: 'advert_thumb_big',
                        path: String },
                        { id: String,
                            processor: 'advert_thumb_medium',
                            path: String },
                        { id: String,
                            processor: 'advert_thumb_small',
                            path: String } ] },
            price: Number,
            realty:
            { category:
            { id: String,
                name: String,
                type: String },
                categoryType:
                { id: String,
                    name: String,
                    category:
                    { id: String,
                        name: String,
                        type: String } },
                address:
                { region:
                { id: String,
                    name: String},
                    city:
                    { id: String,
                        name: String},
                    district:
                    { id: String,
                        name: String},
                    street:
                    { id: String,
                        name: String},
                    houseNumber:
                    { id: String,
                        number: Number},
                    flatNumber:
                    { id: String,
                        number: Number},
                    longitude: Number,
                    latitude: Number},
                roomCount: Number,
                area: Number,
                areaUnit:
                { id: String,
                    name: String } },
            convertedPrice: Number,
            currency:
            { id: String,
                name: String },
            convertedCurrency:
            { id: String,
                name: String } }
         ]
    })
    .toss()

/**
 {
  total: 13,
  count: 100,
  page: 1,
  data:
   [ { id: '552e8d12d69b5ae1118b458b',
            title: 'сдается в аренду квартира около Ж/д вокзала',
            operationType:
            { id: '552e78d3d69b5ad57f8b45f5',
                name: 'Аренда',
                type: 'rent' },
            period:
            { id: '552e78d3d69b5ad57f8b45fe',
                name: 'За день' },
            mainImage:
            { id: '552e8cfdd69b5a7b138b4582',
                thumbnails:
                    [ { id: '552e8cfdd69b5a7b138b4583',
                        processor: 'advert_thumb_big',
                        path: '/uploads/thumbnail/advert_thumb_big/14/29/11/41/08/1429114108.jpeg' },
                        { id: '552e8cfdd69b5a7b138b4584',
                            processor: 'advert_thumb_medium',
                            path: '/uploads/thumbnail/advert_thumb_medium/14/29/11/41/09/1429114109.jpeg' },
                        { id: '552e8cfdd69b5a7b138b4585',
                            processor: 'advert_thumb_small',
                            path: '/uploads/thumbnail/advert_thumb_small/14/29/11/41/09/1429114109.jpeg' } ] },
            price: 100,
            realty:
            { category:
            { id: '552e78d3d69b5ad57f8b45e2',
                name: 'Квартиры и комнаты',
                type: 'flat' },
                categoryType:
                { id: '552e78d3d69b5ad57f8b45e6',
                    name: 'Квартира',
                    category:
                    { id: '552e78d3d69b5ad57f8b45e2',
                        name: 'Квартиры и комнаты',
                        type: 'flat' } },
                address:
                { region:
                { id: '552e78d3d69b5ad57f8b4593',
                    name: 'Черкасская область' },
                    city:
                    { id: '552e78d3d69b5ad57f8b4595',
                        name: 'Черкассы' },
                    district:
                    { id: '552e78d3d69b5ad57f8b4598',
                        name: 'Ж/Д' },
                    street:
                    { id: '552e8caed69b5a7b138b457e',
                        name: 'Хоменка' },
                    houseNumber:
                    { id: '552e8caed69b5a7b138b457f',
                        number: 15 },
                    flatNumber:
                    { id: '552e8caed69b5a7b138b4580',
                        number: 27 },
                    longitude: 32.059767,
                    latitude: 49.444433 },
                roomCount: 0,
                area: 24,
                areaUnit:
                { id: '552e78d3d69b5ad57f8b45f7',
                    name: 'Кв. метры' } },
            convertedPrice: 4.0485829959514,
            currency:
            { id: '552e78d3d69b5ad57f8b45fd',
                name: 'UAH' },
            convertedCurrency:
            { id: '552e78d3d69b5ad57f8b45fc',
                name: 'USD' } },
         ]
 }
 */