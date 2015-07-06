require('./boot');
frisby.create('Get Agency Subdomain Adverts List (sort)')
    //.addHeader('token', agencyToken)
    .get(URL_agency_subdomain_adverts+
    '?operationType='+operationtypesId)
    //'&category='+category_type0CategoryId)//operationtypesid=Продажа/Аренда= operationTypesRent, category_type(0..3)Id, priceFrom, priceTo, currency
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        total: Number,
        count: Number,
        page: Number,
        data: Array
    })
    .toss()
