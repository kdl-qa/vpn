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
regionsId =  regionsData[regionsData.length-1].id;

//------------------------------Cities Data-------------------------------//

citiesData = cities.getCities();
citiesId =  citiesData[citiesData.length-1].id;

//------------------------------Streets Data-------------------------------//

streetsData = streets.getStreets();
streetsId =  streetsData[streetsData.length-1].id;

//------------------------------Districts Data-------------------------------//

districtsData = districts.getDistricts();
districtsId =  districtsData[districtsData.length-1].id;

//------------------------------Houses Data-------------------------------//

housesData = houses.getHouses();
housesId =  housesData[housesData.length-1].id;

//------------------------------Flats Data-------------------------------//

flatsData = flats.getFlats();
flatsId =  flatsData[flatsData.length-1].id;


//------------------------------Appliances Data-------------------------------//
appliancesData = appliances.getAppliances();
appliancesId =  appliancesData[appliancesData.length-1].id;

//------------------------------Area Units Data-------------------------------//
areaunitsData = areaunits.getAreaUnits();
areaunitsId =  areaunitsData[0].id;

//------------------------------Balconies Data-------------------------------//
balconiesData = balconies.getBalconies();
balconiesId =  balconiesData[balconiesData.length-1].id;

//------------------------------Communications Data-------------------------------//
communicationsData = communications.getCommunications();
communicationsId =  communicationsData[communicationsData.length-1].id;

//------------------------------Communications Data-------------------------------//
currencyData = currency.getCurrency();
currencyId =  currencyData[currencyData.length-1].id;

//------------------------------Furnitures Data-------------------------------//
furnituresData = furnitures.getFurnitures();
furnituresId =  furnituresData[furnituresData.length-1].id;

//------------------------------Heatings Data-------------------------------//
heatingsData = heatings.getHeatings();
heatingsId =  heatingsData[heatingsData.length-1].id;

//------------------------------Market Types Data-------------------------------//
marketsData = markets.getMarkets();
marketsId =  marketsData[marketsData.length-1].id;

//------------------------------Near Objects Data-------------------------------//
nearobjectsData = nearobjects.getNearObjects();
nearobjectsId =  nearobjectsData[nearobjectsData.length-1].id;

//------------------------------Operation Types Data-------------------------------//
operationtypesData = operationtypes.getOperationTypes();
operationtypesId =  operationtypesData[operationtypesData.length-1].id;

//------------------------------Operation Types Data-------------------------------//
repairsData = repairs.getRepairs();
repairsId =  repairsData[repairsData.length-1].id;

//------------------------------Wall Materials Data-------------------------------//
wallmaterialsData = wallmaterials.getWallMaterials();
wallmaterialsId =  wallmaterialsData[wallmaterialsData.length-1].id;

//------------------------------Water Heatings Data-------------------------------//
waterheatData = waterheat.getWaterHeatings();
waterheatId =  waterheatData[waterheatData.length-1].id;

//------------------------------WC Data-------------------------------//

wcData = wc.getWc();
wcId =  wcData[wcData.length-1].id;

//----------------------------------------Realty Static Data----------------------------------------//
//------------------------------Add Flats Realty Data-------------------------------//
realtyFlatsData = realties.getFlatsRealties();

afr_houseNumber = realtyFlatsData.houseNumber;
afr_flatNumber = realtyFlatsData.flatNumber;
afr_latitude = realtyFlatsData.latitude;
afr_longitude = realtyFlatsData.longitude;
afr_area = realtyFlatsData.area;
afr_roomCount = realtyFlatsData.roomCount;
afr_livingArea = realtyFlatsData.livingArea;
afr_kitchenArea  = realtyFlatsData.kitchenArea;
afr_floor = realtyFlatsData.floor;
afr_floorNumber = realtyFlatsData.floorNumber;
afr_buildYear = realtyFlatsData.buildYear;

//------------------------------Add Houses Realty Data-------------------------------//
realtyHousesData = realties.getHousesRealties();

ahr_houseNumber = realtyHousesData.houseNumber;
ahr_latitude = realtyHousesData.latitude;
ahr_longitude = realtyHousesData.longitude;
ahr_area = realtyHousesData.area;
ahr_roomCount = realtyHousesData.roomCount;
ahr_livingArea = realtyHousesData.livingArea;
ahr_kitchenArea  = realtyHousesData.kitchenArea;
ahr_landArea = realtyHousesData.landArea;
ahr_landAreaUnit = areaunitsData[1].id;
ahr_floorNumber = realtyHousesData.floorNumber;
ahr_buildYear = realtyHousesData.buildYear;

//------------------------------Add Parcels Realty Data-------------------------------//
realtyParcelsData = realties.getParcelsRealties();

apr_cadastralNumber = realtyParcelsData.cadastralNumber;
apr_latitude = realtyParcelsData.latitude;
apr_longitude = realtyParcelsData.longitude;
apr_area = realtyParcelsData.area;
apr_areaunitsId = areaunitsData[1].id;

//------------------------------Add Commercial Realty Data-------------------------------//
realtyCommercialData = realties.getCommercialsRealties();

acr_houseNumber = realtyCommercialData.houseNumber;
acr_latitude = realtyCommercialData.latitude;
acr_longitude = realtyCommercialData.longitude;
acr_area = realtyCommercialData.area;
acr_effectiveArea = realtyCommercialData.effectiveArea;
acr_roomCount = realtyCommercialData.roomCount;
acr_floor = realtyCommercialData.floor;
acr_floorNumber = realtyCommercialData.floorNumber;
acr_buildYear = realtyCommercialData.buildYear;





//------------------------------Delete Advert Image Data-------------------------------//
var advertId = '55376f32d69b5af43a8b459c';
var imageId = '55376ab6d69b5a07118b4581';


//------------------------------------------------Project Endpoint Link Data------------------------------------------------//


//------------------------------Categories & Additionals Lists API-------------------------------//

catData = category.getCategories();
var catId;
for (var i = 0; i < catData.length; i++){
    catId = catData[i].id;
    catData = category.getCategories();
    eval("URL_category_types_" + i + "= url + 'lists/category-types/' + catId"); // GET LISTS CATEGORY-TYPES {CATEGORYID}
    eval("URL_additionals_" + i + "= url + 'lists/additionals/' + catId;") // GET LISTS ADDITIONALS {CATEGORYID}
}
//categoryId = catData.pop().id;

category_type0Data = category_type0.getCategory_type0();
category_type0Id = category_type0Data[0].id; //category_type0Data[category_type0Data.length-1].id - the last item of list
category_type0CategoryId = category_type0Data[0].category.id;

category_type1Data = category_type1.getCategory_type1();
category_type1Id = category_type1Data[0].id;
category_type1CategoryId = category_type1Data[0].category.id;

category_type2Data = category_type2.getCategory_type2();
category_type2Id = category_type1Data[0].id;
category_type2CategoryId = category_type2Data[0].category.id;

category_type3Data = category_type3.getCategory_type3();
category_type3Id = category_type3Data[0].id;
category_type3CategoryId = category_type3Data[0].category.id;

additionals_cat0Data = additionals_cat0.getAdditionals_cat0();
additionals_cat0Id = additionals_cat0Data.pop().id;

additionals_cat1Data = additionals_cat1.getAdditionals_cat1();
additionals_cat1Id = additionals_cat1Data.pop().id;

additionals_cat2Data = additionals_cat2.getAdditionals_cat2();
additionals_cat2Id = additionals_cat2Data.pop().id;

additionals_cat3Data = additionals_cat3.getAdditionals_cat3();
additionals_cat3Id = additionals_cat3Data.pop().id;


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

// GET LISTS COUNTRIES
URL_currency =  url + 'lists/currency';

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

//-----------------------------------Realty API-----------------------------------//
//POST ADD FLATS REALTY
URL_realties_flats_add = url + 'realties/flats/add';

//POST ADD HOUSES REALTY
URL_realties_houses_add = url + 'realties/houses/add';

//POST ADD PARCELS REALTY
URL_realties_parcels_add = url + 'realties/parcels/add';

// POST ADD COMMERCIALS REALTY
URL_realties_commercials_add = url + 'realties/commercials/add';