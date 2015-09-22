var url = "http://uhome.co/api/v1/";
domain = 'uhome.co';
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
editAgencyData = user.getEditAgency();
editAgentData = user.getEditAgent();

//restoreData = user.getRestoreData();
userFirstName = userData.first_name;
userLastName = userData.last_name;
userPhones = userData.phones;
userPassword = userData.password;
userEmail = userData.email;
userToken = saveUserData.token;
userId = saveUserData.id;
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
agencyAvatar = agencyData.avatar;
agencyToken = saveAgencyData.token;
agencyId = saveAgencyData.id;

agentFirstName = agentData.first_name;
agentLastName = agentData.last_name;
agentPhones = agentData.phones;
agentPassword = agentData.password;
agentEmail = agentData.email;
agentAvatar = agentData.avatar;
agentToken = saveAgentData.token;
agentId = saveAgentData.id;

adminEmail = adminData.email;
adminPassword = adminData.password;
adminToken = saveAdminData.token;

editUserFirstName = editUserData.first_name;
editUserLastName = editUserData.last_name;
editUserPhones = editUserData.phones;
editUserEmail = editUserData.email;

editAgencyFirstName = editAgencyData.firstName;
editAgencyLastName = editAgencyData.lastName;
editAgencyName = editAgencyData.name;
editAgencySubdomain = editAgencyData.subdomain;
editAgencyDescription = editAgencyData.description;
editAgencyPassword = editAgencyData.password;
editAgencyEmail = editAgencyData.email;
editAgencyOfficeName = editAgencyData.offices[0].name;
editAgencyOfficeNumber = editAgencyData.offices[0].number;
editAgencyOfficeAddress = editAgencyData.offices[0].address;
editAgencyOfficeCoordinates = editAgencyData.offices[0].coordinates;
editAgencyOfficesPhones = editAgencyData.offices[0].phones;
editAgencySchedule = editAgencyData.schedule;
editAgencySocialNetworks = editAgencyData.networks;
//agencyAvatar = agencyData.avatar;

editAgentFirstName = editAgentData.first_name;
editAgentLastName = editAgentData.last_name;
editAgentPhones = editAgentData.phones;
editAgentEmail = editAgentData.email;

certificateData = images.getCertificate();
certificate2Data = images.getCertificate2();

certificate1 = certificateData.id;
certificate2 = certificate2Data.id;


//------------------------------Images Data-------------------------------//
userAvatarData = images.getUserAvatar();

userAvatar = userAvatarData.id;

//------------------------------Regions Data-------------------------------//

regionsData = regions.getRegions();
regionsId =  regionsData[0].id;

//------------------------------Cities Data-------------------------------//

citiesData = cities.getCities();
citiesId =  citiesData[citiesData.length-1].id;
citiesName = citiesData[citiesData.length-1].latinName;
//------------------------------Statuses Data-------------------------------//

//statusesData = statuses.getStatuses();
//statusesId =  statusesData[statusesData.length-1].id; // 0,1,2,3,4


//------------------------------Streets Data-------------------------------//

streetsData = streets.getStreets();
streetsId =  streetsData[0].id;

//------------------------------Districts Data-------------------------------//

districtsData = districts.getDistricts();
districtsId =  districtsData[0].id;

//------------------------------Houses Data-------------------------------//

housesData = houses.getHouses();
housesId =  housesData[0].id;

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

//------------------------------Unpublish Reasosns Data-------------------------------//
unpublishReasonsData = unpublish_reasons.getUnpublishReasons();
unpublishReasonsId =  unpublishReasonsData[unpublishReasonsData.length-1].id;

//------------------------------Water Heatings Data-------------------------------//
waterheatData = waterheat.getWaterHeatings();
waterheatId =  waterheatData[waterheatData.length-1].id;

//------------------------------WC Data-------------------------------//

wcData = wc.getWc();
wcId =  wcData[0].id;

//------------------------------Project Info Data-------------------------------//

projectInfoData = project_info.getProjectInfo();
//projectInfoDataLogoId = project_info.getProjectInfo().logo.id;

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
advertsListId = advertsListData.id;
advertsListSlug = advertsListData.slug;

advertsSendListData = adverts.getAdvertListSend();
advertsSendListEmail = advertsSendListData.email;
advertsSendListSubject = advertsSendListData.subject;
advertsSendListText = advertsSendListData.text;

advertImageData = images.getAdvertImage();
advertImage2Data = images.getAdvertImage2();
advertImage = advertImageData.id;
advertImage2 = advertImage2Data.id;

//------------------------------Info Pages Data-------------------------------//
infoPageData = info_page.getInfoPage();
infoPageLatinName = infoPageData.latinName;

editInfoPageData = info_page.getEditInfoPage();
editInfoPageLatinName = editInfoPageData.latinName;
//editInfoPageName = editInfoPageData.name;
//editInfoPageContent = editInfoPageData.content;
//editInfoPageTitle = editInfoPageData.title;
//editInfoPageMetaDescription = editInfoPageData.metaDescription;
//editInfoPageMetaRobots = editInfoPageData.metaRobots;


//------------------------------Delete Advert Image Data-------------------------------//


//------------------------------Schema Image Data-------------------------------//
schemaData = images.getSchema;
schemaId = schemaData.id;

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
categoryName = catData[0].type; //0,1,2,3
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

// GET LISTS ANNOUNCEMENT STATUSES
URL_statuses = url + 'lists/statuses';

// GET LISTS WALL-MATERIALS
URL_wall_materials = url + 'lists/wall-materials';

// GET LISTS UNPUBLISH REASONS
URL_unpublish_reasons = url + 'lists/unpublish-reasons';

// GET LISTS WATER-HEATINGS
URL_water_heatings = url + 'lists/water-heatings';

// GET LISTS WC
URL_wc = url + 'lists/wc';

//-----------------------------------User API-----------------------------------//

// POST LOGIN
URL_login = url + 'login';

// GET USER
URL_get_user = url + 'get-user';

// POST LOGOUT
URL_logout = url + 'logout';

// POST REGISTRATION PRIVATE-PERSON
URL_registration_pperson = url + 'registration/private-person';

// POST REGISTRATION AGENCY
URL_registration_agency = url + 'registration/agency';

// POST ADMIN REGISTRATION AGENCY
URL_registration_agency_admin = url + 'admin/registration/agency';

// POST REGISTRATION AGENCY
URL_registration_agent = url + 'registration/agent';

// POST LOGIN ADMIN
URL_login_admin = url + 'admin/login';

// PUT EDIT PROFILE PRIVATE-PERSON
URL_edit_profile_pperson = url + 'profiles/private-persons/edit';

// PUT EDIT PROFILE AGENCY
URL_edit_profile_agencies = url + 'profiles/agencies/edit';

// PUT EDIT PROFILE AGENT
URL_edit_profile_agents = url + 'profiles/agents/edit';

//POST EDIT AGENCY SERVICES AND CERTIFICATES
URL_edit_profile_services = url + 'profiles/agencies/services/edit';

// PUT CHANGE-PASSWORD
URL_change_password = url + 'profiles/change-password';

// PUT FORGOT-PASSWORD
URL_forgot_password = url + 'forgot-password';

// PUT RESET-PASSWORD
URL_reset_password = url + 'reset-password';

//GET AGENTS OF AGENCY
URL_profiles_agencies_agents = url + 'profiles/agencies/agents/1/25';

//GET USERS STATISTICS (ADMIN)
URL_user_statistics = url + 'users/statistics';

//GET USERS (ADMIN)
URL_admin_users = url + 'users';

//CHECK-SUBDOMAIN AGENCY
URL_agency_check_subdomain = url + 'registration/agency/check-subdomain/';

//PUT CHANGE STATUS AGENT
URL_admin_change_status_agent = url + 'admin/users/' + agentId + '/change-status';

//PUT CHANGE STATUS AGENCY
URL_admin_change_status_agency = url + 'admin/users/' + agencyId + '/change-status';


//-----------------------------------Image API-----------------------------------//

// POST UPLOAD ADVERT IMAGE
URL_advert_image = url + 'uploads/announcement-image';

// POST UPLOAD ADVERT IMAGE
URL_schema_image = url + 'uploads/schema';

// POST UPLOAD USER AVATAR
URL_user_avatar = url + 'uploads/user-avatar';

// POST UPLOAD CERTIFICATE IMAGE
URL_certificates_image = url + 'uploads/certificates';

// DELETE ADVERT IMAGE {ADVERT ID / IMAGE ID}
URL_delete_image = url + 'announcements/' + advertsFlatSaleId + '/images/' + advertImage +'/delete'; // Flat, House, Parcel, Commercial (Sale or Rent)

//-----------------------------------Search API-----------------------------------//

// POST SEARCH ADVERTS LIST
URL_search_adverts = url + 'search';

// POST SEARCH ADVERTS LIST
URL_search_adverts_sort = url + 'search/1/50/';

//-----------------------------------------Realty API-----------------------------------------//
//GET ADMIN SORT LIST REALTIES
URL_admin_realties_list = url + 'realties/lists/1/25';

//GET ADMIN REALTY
URL_realty = url + 'profiles/realties/' + realtyFlatId;

//GET REALTY HISTORY
URL_realty_history = url + 'realties/history/' + realtyFlatId;

//-----------------------------------Add Realty API-----------------------------------//
//POST ADD FLATS REALTY
URL_realties_flats_add = url + 'realties/flats/add';

//POST ADD HOUSES REALTY
URL_realties_houses_add = url + 'realties/houses/add';

//POST ADD PARCELS REALTY
URL_realties_parcels_add = url + 'realties/parcels/add';

// POST ADD COMMERCIALS REALTY
URL_realties_commercials_add = url + 'realties/commercials/add';

//-----------------------------------Edit Realty API-----------------------------------//
//PUT EDIT FLATS REALTY
URL_realties_flats_edit = url + 'realties/flats/edit/' + realtyFlatId;

//PUT EDIT HOUSES REALTY
URL_realties_houses_edit = url + 'realties/houses/edit/' + realtyHouseId;

//PUT EDIT PARCELS REALTY
URL_realties_parcels_edit = url + 'realties/parcels/edit/' + realtyParcelId;

// PUT EDIT COMMERCIALS REALTY
URL_realties_commercials_edit = url + 'realties/commercials/edit/' + realtyCommercialId;

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

//POST ADD FLATS ADVERTS
URL_adverts_flats_add = url + 'announcements/flats/add/' + realtyFlatId;

//POST ADD HOUSES ADVERTS
URL_adverts_houses_add = url + 'announcements/houses/add/' + realtyHouseId;

//POST ADD PARCELS ADVERTS
URL_adverts_parcels_add = url + 'announcements/parcels/add/' + realtyParcelId;

//POST ADD COMMERCIALS ADVERTS
URL_adverts_commercials_add = url + 'announcements/commercials/add/' + realtyCommercialId;

//-----------------------------------Edit Advert API-----------------------------------//

//PUT EDIT FLATS ADVERTS BY ADMIN
URL_admin_adverts_flats_edit = url + 'announcements/edit/' + advertsFlatSaleId;

//PUT EDIT HOUSES ADVERTS BY ADMIN
URL_admin_adverts_houses_edit = url + 'announcements/edit/' + advertsHouseSaleId;

//PUT EDIT PARCELS ADVERTS BY ADMIN
URL_admin_adverts_parcels_edit = url + 'announcements/edit/' + advertsParcelSaleId;

//PUT EDIT COMMERCIALS ADVERTS BY ADMIN
URL_admin_adverts_commercials_edit = url + 'announcements/edit/' + advertsCommercialsSaleId;

//PUT EDIT FLATS ADVERTS
URL_adverts_flats_edit = url + 'announcements/flats/edit/' + advertsFlatSaleId;

//PUT EDIT HOUSES ADVERTS
URL_adverts_houses_edit = url + 'announcements/houses/edit/' + advertsHouseSaleId;

//PUT EDIT PARCELS ADVERTS
URL_adverts_parcels_edit = url + 'announcements/parcels/edit/' + advertsParcelSaleId;

//PUT EDIT COMMERCIALS ADVERTS
URL_adverts_commercials_edit = url + 'announcements/commercials/edit/' + advertsCommercialsSaleId;

//-----------------Unpublish Advert API----------//
//UNPUBLISH FLATS ADVERT
URL_adverts_flats_unpublish = url + 'announcements/unpublish/' + advertsFlatSaleId;

//GET LAST ADVERTS
URL_last_adverts = url + 'get-announcements/last/';

//GET ADVERT
URL_get_advert = url + 'get-announcements/';

//CREATE LIST OF ADVERTS
URL_create_list_adverts = url + 'profiles/announcements-lists/create';

//EDIT LIST OF ADVERTS
URL_edit_list_adverts = url + 'profiles/announcements-lists/' + advertsListId + '/edit';

//ADVERTS LIST ADD ADVERTS
URL_adverts_list_add_adverts = url + 'profiles/announcements-lists/' + advertsListId + '/add';

//ADVERTS LIST DELETE ADVERT
URL_adverts_list_delete_advert = url + 'profiles/announcements-lists/' + advertsListId + '/' + advertsFlatSaleId + '/delete';

//ADVERTS LIST DELETE
URL_adverts_list_delete = url + 'profiles/announcements-lists/' + advertsListId + '/delete';

//GET ADVERTS GROUP LIST
URL_adverts_group_lists = url + 'lists/' + advertsListId + '/1/50';

//PUT UPDATE INTERESTING GROUP ADVERT
URL_adverts_group_lists_update_interesting = url + 'lists/' + advertsListId + '/' + advertsFlatSaleId + '/true';

//GET PROFILE ADVERTS GROUP LISTS
URL_profiles_adverts_group_lists = url + 'profiles/announcements-lists/lists';

//POST SEND LIST ADVERTS
URL_profiles_send_list_adverts = url + 'profiles/announcements-lists/'+ advertsListId + '/send';

//GET PROFILE LIST ADVERTS
URL_profiles_list_adverts = url + 'profiles/announcements';

//GET PROFILE ADVERT
URL_profiles_advert = url + 'profiles/announcements/' + advertsFlatSaleId;

//GET ADMIN ADVERTS STATISTICS
URL_admin_adverts_statistics = url + 'announcements/statistics';

//GET ADMIN REALTIES STATISTICS
URL_admin_realties_statistics = url + 'realties/statistics';

//GET ADMIN SORT LIST ADVERTS
URL_admin_adverts_list = url + 'announcements/lists/1/25';

//GET ADMIN SORT LOGS
URL_admin_logs = url + 'logs/1/25';

//GET AGENCY SUBDOMAIN ADVERTS
URL_agency_subdomain_adverts = 'http://' + agencySubdomain + '.' + domain + '/api/v1/agencies/get-announcements/1/24/date';

//GET AGENCY SUBDOMAIN EMPLOYEES
URL_agency_subdomain_employees = 'http://' + agencySubdomain + '.' + domain + '/api/v1/agencies/employees';

//GET AGENCY SUBDOMAIN SERVICES
URL_agency_subdomain_services = 'http://' + agencySubdomain + '.' + domain + '/api/v1/agencies/services';

//GET AGENCY SUBDOMAIN INFO
URL_agency_subdomain_info = 'http://' + agencySubdomain + '.' + domain + '/api/v1/agencies/info';

//-----------------------------------------------Info API-----------------------------------------------//
// GET INFO PAGE ABOUT
URL_info_page_about = url + 'info/pages/about';

// GET INFO PAGE TERMS AND CONDITIONS
URL_info_page_terms = url + 'info/pages/terms-and-conditions';

// GET INFO PAGE REGISTRATION AGENCY (AGENT)
URL_info_page_registration_agency_agent = url + 'info/pages/registration-agency-and-agent';

// GET PROJECT INFO
URL_project_info = url + 'get-project-info';

// PUT EDIT PROJECT INFO
URL_project_info_edit = url + 'project-info/edit';

//-----------------------------------------------Seo Admin API-----------------------------------------------//
//GET INFO PAGES
URL_info_pages = url + 'admin/info-pages';

//CREATE INFO PAGE
URL_info_pages_create = url + 'admin/info-pages/create';

//EDIT INFO PAGE
URL_info_pages_edit = url + 'admin/info-pages/' + infoPageLatinName + '/edit';

//DELETE INFO PAGE
URL_info_pages_delete = url + 'admin/info-pages/' + infoPageLatinName + '/delete';

//-----------------------------------------------SEO API-----------------------------------------------//
// GET SEO CITY LANDING PAGE
URL_seo_landings_city = url + 'landings/' + citiesName;

// GET SEO CATEGORY LANDING PAGE
URL_seo_landings_city_category = url + 'landings/' + citiesName;

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
