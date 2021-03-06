var url = "http://vpn.qa/api/v1/";

//------------------------------User Data-------------------------------//
userData = user.getUser();
agencyData = user.getAgency();
agentData = user.getAgent();
adminData = user.getAdmin();

saveUserData = user.getUserData1();
saveAgencyData = user.getAgencyData();
saveAgentData = user.getAgentData();
saveAdminData = user.getAdminData();
editUserData = user.getEditUser();

//restoreData = user.getRestoreData();
userFirstName = userData.first_name;
userLastName = userData.last_name;
userPhones = userData.phones;
userPassword = userData.password;
userEmail = userData.email;
userToken = saveUserData.token;
//userAvatar = userData.avatar;

agencyFirstName = agencyData.firstName;
agencyLastName = agencyData.lastName;
agencyName = agencyData.name;
agencySubdomain = agencyData.subdomain;
agencyDescription = agencyData.description;
agencyPassword = agencyData.password;
agencyEmail = agencyData.email;
agencyOfficeName = agencyData.offices[0].name;
agencyOfficeNumber = agencyData.offices[0].number;
agencyOfficeAddress = agencyData.offices[0].address;
agencyOfficeCoordinates = agencyData.offices[0].coordinates;
agencyOfficesPhones = agencyData.offices[0].phones;
agencySchedule = agencyData.schedule;
agencySocialNetworks = agencyData.networks;
//agencyAvatar = agencyData.avatar;
agencyToken = saveAgencyData.token;

agentFirstName = agentData.first_name;
agentLastName = agentData.last_name;
agentPhone = agentData.phone;
agentPassword = agentData.password;
agentEmail = agentData.email;
agentAvatar = agentData.avatar;
agentToken = saveAgentData.token;

adminEmail = adminData.email;
adminPassword = adminData.password;
adminToken = saveAdminData.token;

editUserFirstName = editUserData.first_name;
editUserLastName = editUserData.last_name;
editUserPhones = editUserData.phones;
editUserEmail = editUserData.email;

//------------------------------Images Data-------------------------------//
userAvatarData = images.getUserAvatar();

userAvatar = userAvatarData.id;

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
flatsId =  flatsData[0].id;


//------------------------------Appliances Data-------------------------------//
appliancesData = appliances.getAppliances();
appliancesId =  appliancesData[0].id;

//------------------------------Area Units Data-------------------------------//
areaunitsData = areaunits.getAreaUnits();
areaunitsId =  areaunitsData[0].id;

//------------------------------Balconies Data-------------------------------//
balconiesData = balconies.getBalconies();
balconiesId =  balconiesData[balconiesData.length-1].id;

//------------------------------Communications Data-------------------------------//
communicationsData = communications.getCommunications();
communicationsId =  communicationsData[communicationsData.length-1].id; //[0]

//------------------------------Communications Data-------------------------------//
currencyData = currency.getCurrency();
currencyId =  currencyData[0].id;

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
nearobjectsId =  nearobjectsData[0].id;

//------------------------------Operation Types Data-------------------------------//
operationtypesData = operationtypes.getOperationTypes();
operationtypesId =  operationtypesData[operationtypesData.length-1].id;

//------------------------------Period Data-------------------------------//
periodsData = periods.getPeriods();
periodId =  periodsData[1].id;

//------------------------------Operation Types Data-------------------------------//
repairsData = repairs.getRepairs();
repairsId =  repairsData[0].id;

//------------------------------Wall Materials Data-------------------------------//
wallmaterialsData = wallmaterials.getWallMaterials();
wallmaterialsId =  wallmaterialsData[wallmaterialsData.length-1].id;

//------------------------------Water Heatings Data-------------------------------//
waterheatData = waterheat.getWaterHeatings();
waterheatId =  waterheatData[waterheatData.length-1].id;

//------------------------------WC Data-------------------------------//

wcData = wc.getWc();
wcId =  wcData[0].id;

//----------------------------------------Realty Test Data----------------------------------------//
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

realtyFlatObject = useRealties.getFlatObject();
realtyFlatId = realtyFlatObject.id;

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

realtyHouseObject = useRealties.getHouseObject();
realtyHouseId = realtyHouseObject.id;

//------------------------------Add Parcels Realty Data-------------------------------//
realtyParcelsData = realties.getParcelsRealties();

apr_cadastralNumber = realtyParcelsData.cadastralNumber;
apr_latitude = realtyParcelsData.latitude;
apr_longitude = realtyParcelsData.longitude;
apr_area = realtyParcelsData.area;
apr_areaunitsId = areaunitsData[1].id;

realtyParcelObject = useRealties.getParcelObject();
realtyParcelId = realtyParcelObject.id;

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

realtyCommercialObject = useRealties.getCommercialObject();
realtyCommercialId = realtyCommercialObject.id;

//----------------------------------------Adverts Test Data----------------------------------------//
//------------------------------Add Flats Advert Data-------------------------------//
advertFlatsData = adverts.getFlatsOptions();

advfs_title = advertFlatsData.title;
advfs_price = advertFlatsData.price;
advfs_ownerName = advertFlatsData.ownerName;
advfs_ownerContacts = advertFlatsData.ownerContacts;
advfs_description = advertFlatsData.description;
advfs_bedsCount = advertFlatsData.bedsCount;

operationTypeRent = operationtypesData[0].id;
advfr_title = advertFlatsData.r_title;
advfr_price = advertFlatsData.r_price;
advfr_currency = currencyData[1].id;
advfr_availableFrom = advertFlatsData.availableFrom;
advfr_ownerName = advertFlatsData.r_ownerName;
advfr_ownerContacts = advertFlatsData.r_ownerContacts;
advfr_description = advertFlatsData.r_description;
advfr_bedsCount = advertFlatsData.r_bedsCount;

advertsFlatSaleId = adverts.getFlatAdvertSale().id;
advertsFlatRentId = adverts.getFlatAdvertRent().id;

//------------------------------Add Houses Advert Data-------------------------------//
advertHousesData = adverts.getHousesOptions();

advhs_title = advertHousesData.title;
advhs_price = advertHousesData.price;
advhs_ownerName = advertHousesData.ownerName;
advhs_ownerContacts = advertHousesData.ownerContacts;
advhs_description = advertHousesData.description;

advhr_title = advertHousesData.r_title;
advhr_price = advertHousesData.r_price;
advhr_currency = currencyData[1].id;
advhr_availableFrom = advertHousesData.availableFrom;
advhr_ownerName = advertHousesData.r_ownerName;
advhr_ownerContacts = advertHousesData.r_ownerContacts;
advhr_description = advertHousesData.r_description;

advertsHouseSaleId = adverts.getHouseAdvertSale().id;
advertsHouseRentId = adverts.getHouseAdvertRent().id;

//------------------------------Add Parcel Advert Data-------------------------------//
advertParcelsData = adverts.getParcelsOptions();

advps_title = advertParcelsData.title;
advps_price = advertParcelsData.price;
advps_ownerName = advertParcelsData.ownerName;
advps_ownerContacts = advertParcelsData.ownerContacts;
advps_description = advertParcelsData.description;

advpr_title = advertParcelsData.r_title;
advpr_price = advertParcelsData.r_price;
advpr_currency = currencyData[1].id;
advpr_availableFrom = advertParcelsData.availableFrom;
advpr_ownerName = advertParcelsData.r_ownerName;
advpr_ownerContacts = advertParcelsData.r_ownerContacts;
advpr_description = advertParcelsData.r_description;

advertsParcelSaleId = adverts.getParcelAdvertSale().id;
advertsParcelRentId = adverts.getParcelAdvertRent().id;

//------------------------------Add Commercial Advert Data-------------------------------//
advertCommercialsData = adverts.getCommercialsOptions();

advcs_title = advertCommercialsData.title;
advcs_price = advertCommercialsData.price;
advcs_ownerName = advertCommercialsData.ownerName;
advcs_ownerContacts = advertCommercialsData.ownerContacts;
advcs_description = advertCommercialsData.description;

advcr_title = advertCommercialsData.r_title;
advcr_price = advertCommercialsData.r_price;
advcr_currency = currencyData[1].id;
advcr_availableFrom = advertCommercialsData.availableFrom;
advcr_ownerName = advertCommercialsData.r_ownerName;
advcr_ownerContacts = advertCommercialsData.r_ownerContacts;
advcr_description = advertCommercialsData.r_description;

advertsCommercialsSaleId = adverts.getCommercialAdvertSale().id;
advertsCommercialsRentId = adverts.getCommercialAdvertRent().id;

//------------------------------Advert Lists Data-------------------------------//
advertsListData = adverts.getAdvertList();
advertsListId =advertsListData.id;


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
category_type2Id = category_type2Data[0].id;
category_type2CategoryId = category_type2Data[0].category.id;

category_type3Data = category_type3.getCategory_type3();
category_type3Id = category_type3Data[0].id;
category_type3CategoryId = category_type3Data[0].category.id;

additionals_cat0Data = additionals_cat0.getAdditionals_cat0();
additionals_cat0Id = additionals_cat0Data[0].id;

additionals_cat1Data = additionals_cat1.getAdditionals_cat1();
additionals_cat1Id = additionals_cat1Data[0].id;

additionals_cat2Data = additionals_cat2.getAdditionals_cat2();
additionals_cat2Id = additionals_cat2Data[0].id;

additionals_cat3Data = additionals_cat3.getAdditionals_cat3();
additionals_cat3Id = additionals_cat3Data[0].id;


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

// GET LISTS OF CURRENCIES
URL_currency =  url + 'lists/currency';

// GET LISTS OF ACTUAL CURRENCIES
URL_actual_currency =  url + 'lists/actual-currency';


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

// GET LISTS OPERATION TYPES
URL_period = url + 'lists/period';

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

// POST REGISTRATION PRIVATE-PERSON
URL_registration_pperson = url + 'registration/private-person';

// POST REGISTRATION AGENCY
URL_registration_agency = url + 'registration/agency';


// POST LOGIN ADMIN
URL_login_admin = url + 'admin/login';

// PUT EDIT PROFILE PRIVATE-PERSON
URL_edit_profile_pperson = url + 'profiles/private-persons/edit';


//-----------------------------------Image API-----------------------------------//

// POST UPLOAD ADVERT IMAGE
URL_advert_image = url + 'uploads/adv-image';

// POST UPLOAD ADVERT IMAGE
URL_schema_image = url + 'uploads/schema';

// POST UPLOAD USER AVATAR
URL_user_avatar = url + 'uploads/user-avatar';

// DELETE ADVERT IMAGE {ADVERT ID / IMAGE ID}
URL_delete_image = url + 'advs/' + advertId + '/images/' + imageId +'/delete';

//-----------------------------------Search API-----------------------------------//

// POST SEARCH ADVERTS LIST
URL_search_adverts = url + 'search';

// POST SEARCH ADVERTS LIST
URL_search_adverts_sort = url + 'search/1/50/';

//-----------------------------------------Realty API-----------------------------------------//
//-----------------------------------Add Realty API-----------------------------------//
//POST ADD FLATS REALTY
URL_realties_flats_add = url + 'realties/flats/add';

//POST ADD HOUSES REALTY
URL_realties_houses_add = url + 'realties/houses/add';

//POST ADD PARCELS REALTY
URL_realties_parcels_add = url + 'realties/parcels/add';

// POST ADD COMMERCIALS REALTY
URL_realties_commercials_add = url + 'realties/commercials/add';

//-----------------------------------Check Realty API-----------------------------------//
//POST CHECK FLATS REALTY
URL_realties_flats_check = url + 'realties/flats/check';

//POST CHECK HOUSES REALTY
URL_realties_houses_check = url + 'realties/houses/check';

//POST CHECK PARCELS REALTY
URL_realties_parcels_check = url + 'realties/parcels/check';

// POST CHECK COMMERCIALS REALTY
URL_realties_commercials_check = url + 'realties/commercials/check';

//-----------------------------------Add Realty API-----------------------------------//
//POST VALIDATE FLATS REALTY
URL_realties_flats_validate = url + 'realties/flats/validate';

//POST VALIDATE HOUSES REALTY
URL_realties_houses_validate = url + 'realties/houses/validate';

//POST VALIDATE PARCELS REALTY
URL_realties_parcels_validate = url + 'realties/parcels/validate';

// POST VALIDATE COMMERCIALS REALTY
URL_realties_commercials_validate = url + 'realties/commercials/validate';


//-----------------------------------------Advert API-----------------------------------------//
//-----------------------------------Add Advert API-----------------------------------//
//POST ADD FLATS ADVERTS
URL_adverts_flats_add = url + 'advs/flats/add/' + realtyFlatId;

//POST ADD FLATS ADVERTS
URL_adverts_houses_add = url + 'advs/houses/add/' + realtyHouseId;

//POST ADD FLATS ADVERTS
URL_adverts_parcels_add = url + 'advs/parcels/add/' + realtyParcelId;

//POST ADD FLATS ADVERTS
URL_adverts_commercials_add = url + 'advs/commercials/add/' +realtyCommercialId;

//GET LAST ADVERTS
URL_last_adverts = url + 'get-advs/last/';

//GET ADVERT
URL_get_advert = url + 'get-advs/';

//CREATE LIST OF ADVERTS
URL_create_list_adverts = url + 'profiles/advs-lists/create';


//-----------------------------------------------Info API-----------------------------------------------//
// GET UHOME CONTACTS
URL_contacts_uhome = url + 'info/contacts';

//-------------------------------------------------Functions to launch the scope of tests----------------------------------------//
getCategoriesData = function(){
    require('./vpn_category_types_0_spec.js');
    require('./vpn_category_types_1_spec.js');
    require('./vpn_category_types_2_spec.js');
    require('./vpn_category_types_3_spec.js');
    require('./vpn_additionals_catid_0_spec.js');
    require('./vpn_additionals_catid_1_spec.js');
    require('./vpn_additionals_catid_2_spec.js');
    require('./vpn_additionals_catid_3_spec.js');
};

//getRegionData = function(){
//    require('./vpn_cities_spec.js');
//};
//
//getCitiesData = function(){
//    require('./vpn_districts_spec.js');
//    require('./vpn_streets_spec.js');
//};
//
//getStreetsData = function(){
//    require('./vpn_houses_spec.js');
//};
//
//getHousesData = function(){
//    require('./vpn_flats_spec.js');
//};

//startFlatsTest = function(){
//    if(
//        catagoryType0ID  &&
//        catagoryType1ID  &&
//        catagoryType2ID  &&
//        catagoryType3ID  &&
//        additional0id  &&
//        additional1id  &&
//        additional2id  &&
//            ...
//    )
//        required('flat_test_spec.js');
//}
