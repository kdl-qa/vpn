require('./boot');
frisby.create('Get UHome contacts')
    .get(URL_contacts_uhome)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    .expectJSONTypes({
        name: String,
        phones: Array,
        address: String,
        timetable: Array
    })
    .toss()