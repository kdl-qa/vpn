require('./boot');
frisby.create('Get list of flat adverts (sell)')
    .get(URL_search_adverts+'?operationType='+operationtypesId+
    '&category='+category_type0CategoryId+
    '&categoryType='+category_type0Id+
    '&priceFrom='+10000+
    '&priceTo='+50000+
    '&currency='+currencyId+
    //'&period='+periodId+
    //'&auction='+false+
    '&region='+regionsId+
    '&city='+citiesId+
    '&livingAreaFrom='+15+
    '&livingAreaTo='+60+
    //'&kitchenAreaFrom='+8+
    //'&kitchenAreaTo='+15+
    '&roomCountFrom='+1+
    '&roomCountTo='+5+
    '&floorFrom='+1+
    '&floorTo='+9+
    '&floorNumberFrom='+3+
    '&floorNumberTo='+9+
    '&wallMaterial='+wallmaterialsId+
    '&buildYearFrom='+1985+
    '&buildYearTo='+2010+
    '&repair='+repairsId+
    '&wc='+wcId+
    '&balcony='+balconiesId+
    '&heating='+heatingsId+
    '&waterHeating='+waterheatId+
    //'&communication7='+communicationsId)
    //'&furniture0='+furnituresId)
    //'&appliances0='+appliancesId)
    '&additionally0='+additionals_cat0Id+
    '&nearObjects0='+nearobjectsId)

    .inspectRequest()
    .inspectHeaders()
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    //.expectJSON({
    //    total: Number,
    //    count: Number,
    //    page: Number,
    //    data: [{
    //        id: String,
    //        title: String
    //    }]
    //})          //Only in positive case
    .toss()