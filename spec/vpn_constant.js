var url = "http://qa.vpn.ua/api/v1/";

//------------------------------User Data-------------------------------//
userData = user.getUser();
agencyData = user.getAgency();
agentData = user.getAgent();

saveUserData = user.getUserData1();
saveAgencyData = user.getAgencyData();
saveAgentData = user.getAgentData();

//restoreData = user.getRestoreData();
userFirstName = userData.first_name;
userLastName = userData.last_name;
userPhone = userData.phone;
userPassword = userData.password;
userEmail = userData.email;
userToken = saveUserData.token;
userAvatar = userData.avatar;

agencyFirstName = agencyData.first_name;
agencyLastName = agencyData.last_name;
agencyPhone = agencyData.phone;
agencyPassword = agencyData.password;
agencyEmail = agencyData.email;
agencyAvatar = agencyData.avatar;
agencyToken = saveAgencyData.token;

agentFirstName = agentData.first_name;
agentLastName = agentData.last_name;
agentPhone = agentData.phone;
agentPassword = agentData.password;
agentEmail = agentData.email;
agentAvatar = agentData.avatar;
agentToken = saveAgentData.token;

//------------------------------Regions Data-------------------------------//

regionsData = regions.getRegions();
regionsId =  regionsData.pop().id;

//------------------------------Cities Data-------------------------------//

citiesData = cities.getCities();
citiesId =  citiesData.pop().id;

//------------------------------Streets Data-------------------------------//

streetsData = streets.getStreets();
streetsId =  streetsData.pop().id;

//------------------------------Districts Data-------------------------------//

districtsData = districts.getDistricts();
districsId =  districtsData.pop().id;

//------------------------------Houses Data-------------------------------//

housesData = houses.getHouses();
housesId =  housesData.pop().id;

//------------------------------Flats Data-------------------------------//

flatsData = flats.getFlats();
flatsId =  flatsData.pop().id;

//------------------------------Categories Data-------------------------------//

catData = category.getCategories();
var catId;
for (var i = 0; i < catData.length; i++){
    catId = catData[i].id;
    catData = category.getCategories();
    eval("URL_category_types_" + i + "= url + 'lists/category-types/' + catId"); // GET LISTS CATEGORY-TYPES {CATEGORYID}
    eval("URL_additionals_" + i + "= url + 'lists/additionals/' + catId;") // GET LISTS ADDITIONALS {CATEGORYID}
}

var advertId = '55376f32d69b5af43a8b459c';
var imageId = '55376ab6d69b5a07118b4581';

//catId = catData.shift().id;

// GET LISTS ADDITIONALS {CATEGORYID}
//URL_additionals = url + 'lists/additionals/' + catId; // + '?categoryId=' + catId;

// GET LISTS APPLIANCES
URL_appliances = url + 'lists/appliances';

// GET LISTS AREA-UNITS
URL_area_units = url + 'lists/area-units';

// GET LISTS BALCONIES
URL_balconies = url + 'lists/balconies';

// GET LISTS CATEGORIES
URL_categories = url + 'lists/categories';

// GET LISTS CATEGORY-TYPES {CATEGORYID}
//URL_category_types = url + 'lists/category-types/' + catId; //

// GET LISTS CITIES {REGIONID}
URL_cities = url + 'lists/cities/' + regionsId;

// GET LISTS COMMUNICATIONS
URL_communications = url + 'lists/communications';

// GET LISTS COUNTRIES
URL_countries =  url + 'lists/countries';

// GET LISTS DISTRICTS {CITYID}
URL_districts = url + 'lists/districts/' + citiesId;

// GET LISTS FURNITURES
URL_furnitures = url + 'lists/furnitures';

// GET LISTS HEATINGS
URL_heatings = url + 'lists/heatings';

// GET LISTS HOUSE-NUMBERS {STREETID}
URL_house_numbers = url + 'lists/house-numbers/' + streetsId;

// GET LISTS FLAT-NUMBERS {HOUSEID}
URL_flats_numbers = url + 'lists/flat-numbers/' + housesId;

// GET LISTS MARKET-TYPES
URL_market_types = url + 'lists/market-types';

// GET LISTS NEAR-OBJECTS
URL_near_objects = url + 'lists/near-objects';

// GET LISTS OPERATION TYPES
URL_operation_types = url + 'lists/operation-types';

// GET LISTS REGIONS
URL_regions = url + 'lists/regions';

// GET LISTS REPAIRS
URL_repairs = url + 'lists/repairs';

// GET LISTS STREETS {CITYID}
URL_streets = url + 'lists/streets/' + citiesId;

// GET LISTS WALL-MATERIALS
URL_wall_materials = url + 'lists/wall-materials';

// GET LISTS WATER-HEATINGS
URL_water_heatings = url + 'lists/water-heatings';

// GET LISTS WC
URL_wc = url + 'lists/wc';

//-----------------------------------User API-----------------------------------//

// POST LOGIN
URL_login = url + 'login';

// POST LOGOUT
URL_logout = url + 'logout';

// POST PRIVATE-PERSON
URL_registration_private_person = url + 'registration/private-person';

//-----------------------------------Image API-----------------------------------//

// POST UPLOAD ADVERT IMAGE
URL_advert_image = url + 'uploads/advert-image';

// POST UPLOAD USER AVATAR
URL_user_avatar = url + 'uploads/user-avatar';

// DELETE ADVERT IMAGE {ADVERT ID / IMAGE ID}
URL_delete_image = url + 'adverts/' + advertId + '/images/' + imageId +'/delete';

//-----------------------------------Search API-----------------------------------//

// POST SEARCH ADVERTS LIST
URL_search_adverts = url + 'search/1/100';