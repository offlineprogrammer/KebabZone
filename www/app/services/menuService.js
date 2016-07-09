(function () {
    'use strict';

    angular
        .module('kebabZone')
        .factory('menuService', menuService);

    function menuService($ionicHistory, $rootScope, CacheFactory, $firebaseObject, $q, appConfig) {
        var CACHE_NAME = 'kebabZoneCacheMenu';
        var MAINMENU_CACHE_KEY = 'MainMenu';
        var AllMENU_CACHE_KEY = 'AllMenu';


        var cache;
        var cachedmenu;


        init();

        var service = {};


        service.getAllMenuData = function () {

            var ref = new Firebase(appConfig.fireBaseURL);
            ref.on("value", function (snapshot) {
                // console.log(snapshot.val());
                cache.put(AllMENU_CACHE_KEY, snapshot.val());
                getCachedMenu();
                return true;
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        };


        service.getSubMenuItems = function (submenuId) {
         

             return _.compact(angular.copy(cache.get(AllMENU_CACHE_KEY)[submenuId]));

        };


        service.menuSearch = function (searchText) {
            var deferred = $q.defer();
            var omenuItems = _.first(findByName(searchText, 0), 20);
            if (omenuItems === undefined || omenuItems.length === 0) {

            } else {
                deferred.resolve(omenuItems);
            }

            return deferred.promise;


        };

        function findByName(searchText, exactMatch) {
            var searchTextLower = searchText.toLowerCase().trim();

            if (exactMatch) {
                return angular.copy(_.find(cachedmenu, function (menuItem) {
                    if (menuItem.name) {
                        return menuItem.name.toLowerCase() === searchTextLower;
                    }
                }));
            } else {
                return angular.copy(_.filter(cachedmenu, function (menuItem) {
                    if (menuItem.name) {
                        return menuItem.name.toLowerCase().indexOf(searchTextLower) >= 0;
                    }
                }));
            }
        }

        service.getMenu = function () {
            var jsonObject = angular.fromJson(cache.get(AllMENU_CACHE_KEY).mainmenu) || [];
            return _.compact(angular.copy(jsonObject))
        };

        service.getBurgerMenu = function () {
            var jsonObject = angular.fromJson(cache.get(AllMENU_CACHE_KEY).burgermenu) || [];
            return _.compact(angular.copy(jsonObject));
        };

        service.getChikenBurgerMenu = function () {
            var jsonObject = angular.fromJson(cache.get(AllMENU_CACHE_KEY).chikenburgermenu) || [];
            return _.compact(angular.copy(jsonObject));
        };

        service.getSteakBurgerMenu = function () {
            var jsonObject = angular.fromJson(cache.get(AllMENU_CACHE_KEY).steakburgermenu) || [];
            return _.compact(angular.copy(jsonObject));
        };

        service.getOtherBurgerMenu = function () {
            var jsonObject = angular.fromJson(cache.get(AllMENU_CACHE_KEY).otherburgermenu) || [];
            return _.compact(angular.copy(jsonObject));
        };

        service.getStartersMenu = function () {
            var jsonObject = angular.fromJson(cache.get(AllMENU_CACHE_KEY).startermenu) || [];
            return _.compact(angular.copy(jsonObject));
        };

        service.getMealDealMenu = function () {
            var jsonObject = angular.fromJson(cache.get(AllMENU_CACHE_KEY).mealdealmenu) || [];
            return _.compact(angular.copy(jsonObject));
        };

        service.getChikenDelightMenu = function () {
            var jsonObject = angular.fromJson(cache.get(AllMENU_CACHE_KEY).chikendelightmenu) || [];
            return _.compact(angular.copy(jsonObject));
        };

        service.getKebabMenu = function () {
            var jsonObject = angular.fromJson(cache.get(AllMENU_CACHE_KEY).kebabmenu) || [];
            return _.compact(angular.copy(jsonObject));
        };

        service.getKidsDealMenu = function () {
            var jsonObject = angular.fromJson(cache.get(AllMENU_CACHE_KEY).kidsmealsmenu) || [];
            return _.compact(angular.copy(jsonObject));
        };

        service.getSoftDrinksMenu = function () {
            var jsonObject = angular.fromJson(cache.get(AllMENU_CACHE_KEY).softdrinksmenu) || [];
            return _.compact(angular.copy(jsonObject));
        };

        service.getSundriseMenu = function () {
            var jsonObject = angular.fromJson(cache.get(AllMENU_CACHE_KEY).sundriesmenu) || [];
            return _.compact(angular.copy(jsonObject));
        };

        service.getOrderItem = function (orderItemId) {

            return cache.get(AllMENU_CACHE_KEY)[orderItemId];

            

        };





        return service;

        function init() {

            cache = new CacheFactory(CACHE_NAME, {
                storageMode: 'localStorage'
            });



            getCachedMenu();



        }

        function getCachedMenu() {
            cachedmenu = angular.fromJson(cache.get(AllMENU_CACHE_KEY)) || [];

        }






    }
} ());