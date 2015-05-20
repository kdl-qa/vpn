require('./boot');
frisby.create('Get list of parcel adverts (sell)')
    .get(URL_search_adverts+
    '?operationType='+operationtypesId+  //sale
    //'?operationType='+operationtypesData[0].id+   //rent
    '&category='+category_type2CategoryId+
    '&categoryType='+category_type2Id+
    '&priceFrom='+5000+
    '&priceTo='+50000+
    '&currency='+currencyId+
     //'&period='+periodId+
     //'&auction='+false+
    '&region='+regionsId+
    '&city='+citiesId+
    '&areaFrom='+1+
    '&areaTo='+15+
    'areaUnit='+areaunitsId+
    '&communication7='+communicationsId+
    '&additionally0='+additionals_cat2Id+
    '&nearObjects0='+nearobjectsId)

    .inspectRequest()
    .inspectHeaders()
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        data: [{
            id: String
        }]
    })          //Only in positive case
    .toss()