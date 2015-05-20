require('./boot');
frisby.create('Get list of commercials adverts (sell)')
    .get(URL_search_adverts+'?operationType='+operationtypesId+
    '&category='+category_type3CategoryId+
    '&categoryType='+category_type3Id+
    '&priceFrom='+10000+
    '&priceTo='+200000+
    '&currency='+currencyId+
    //'&period='+periodId+
    //'&auction='+false+
    '&region='+regionsId+
    '&city='+citiesId+
    '&areaFrom='+1+
    '&areaTo='+10000+
    '&areaUnit='+areaunitsData[0].id+
    '&effectiveAreaFrom='+1+
    '&effectiveAreaTo='+100000+
    '&roomCountFrom='+1+
    '&roomCountTo='+5+
    '&floorFrom='+1+
    '&floorTo='+9+
    '&floorNumberFrom='+1+
    '&floorNumberTo='+9+
    '&wallMaterial='+wallmaterialsId+
    '&buildYearFrom='+1985+
    '&buildYearTo='+2010+
    '&repair='+repairsId+
    '&wc='+wcId+
    '&heating='+heatingsId+
    '&waterHeating='+waterheatId+
    '&communication7='+communicationsId+
    '&additionally0='+additionals_cat3Id)


    .inspectRequest()
    .inspectHeaders()
    .inspectJSON()
    .inspectBody()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSON({
        data: [{
            id: String
        }]
    })          //Only in positive case
    .toss()