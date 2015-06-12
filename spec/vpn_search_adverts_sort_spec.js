require('./boot');
frisby.create('Search adverts and sort')
    .get(URL_search_adverts_sort+'date'+      // price, price_desc, area, area_desc, date(default)
    '?operationType='+operationtypesId+       // Sale or Rent
    '&category='+category_type2CategoryId+    // flats, houses, parcels, commercials
    '&categoryType='+category_type2Id+        // category type
    //'&priceFrom='+10000+
    //'&priceTo='+50000+
    //'&currency='+currencyId+
    //'&period='+periodId+
    //'&auction='+true+
    '&region='+regionsData[1].id+
    //'&city='+citiesId+
    '&lon0='+-150+
    '&lat0='+-60+
    '&lon1='+150+
    '&lat1='+80)
    //'&livingAreaFrom='+15+
    //'&livingAreaTo='+60+
    //'&kitchenAreaFrom='+8+
    //'&kitchenAreaTo='+15+
    //'&roomCountFrom='+1+
    //'&roomCountTo='+5+
    //'&floorFrom='+1+
    //'&floorTo='+9+
    //'&floorNumberFrom='+3+
    //'&floorNumberTo='+9+
    //'&wallMaterial='+wallmaterialsId+
    //'&buildYearFrom='+1985+
    //'&buildYearTo='+2010+
    //'&repair='+repairsId+
    //'&wc='+wcId+
    //'&balcony='+balconiesId+
    //'&heating='+heatingsId+
    //'&waterHeating='+waterheatId+
    //'&furniture[0]='+furnituresId+
    //'&appliances0='+appliancesId+
    //'&additionally0='+additionals_cat0Id+
    //'&nearObjects0='+nearobjectsId)

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