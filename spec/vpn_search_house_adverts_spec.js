require('./boot');
frisby.create('Get list of house adverts (sell)')
    .get(URL_search_adverts+
    '?operationType='+operationtypesId+  //sale
    //'?operationType='+operationtypesData[0].id+   //rent
    '&category='+category_type1CategoryId+
    '&categoryType='+category_type1Id+
    '&priceFrom='+10000+
    '&priceTo='+150000+
    '&currency='+currencyId+
    //'&period='+periodId+
    //'&auction='+false+
    '&region='+regionsId+
    '&city='+citiesId+
    '&livingAreaFrom='+20+
    '&livingAreaTo='+200+
    '&kitchenAreaFrom='+8+
    '&kitchenAreaTo='+25+
    '&roomCountFrom='+1+
    '&roomCountTo='+7+
    '&floorNumberFrom='+1+
    '&floorNumberTo='+5+
    '&wallMaterial='+wallmaterialsId+
    '&buildYearFrom='+1985+
    '&buildYearTo='+2010+
    '&repair='+repairsId+
    '&wc='+wcId+
    '&heating='+heatingsId+
    '&waterHeating='+waterheatId+
    '&communication7='+communicationsId+
    '&furniture0='+furnituresId+
    '&appliances0='+appliancesId+
    '&additionally0='+additionals_cat1Id+
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