require('./boot');
frisby.create('Get Categories')
    .get(URL_categories)
    .inspectJSON()
    .expectHeader('Content-Type', 'application/json')
    .expectStatus(200)
    //.expectJSON([
    //    {name: 'Квартиры и комнаты'},
    //    {name: 'Дома и дачи'},
    //    {name: 'Земельные участки'},
    //    {name: 'Коммерческая недвижимость'}
    //])
    .expectJSON([{
        id: String,
        name: String
    }])
    .afterJSON(function (json) {
       //if (json.status == 200) { // json['status']
           category.saveCategories(json);
    })
    .toss()
