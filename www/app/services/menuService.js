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
        var cachedmenue;


        init();

        var service = {};


        service.getAllMenuData = function () {

            var ref = new Firebase(appConfig.fireBaseURL);
            ref.on("value", function (snapshot) {
                // console.log(snapshot.val());
                cache.put(AllMENU_CACHE_KEY, snapshot.val());
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        };


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
            switch (orderItemId) {
                case 'cheesychickenburger':
                    return cache.get(AllMENU_CACHE_KEY).cheesychickenburger;
                case 'hawaianchickenburger':
                    return cache.get(AllMENU_CACHE_KEY).hawaianchickenburger;
                case 'plainchickenburger':
                    return cache.get(AllMENU_CACHE_KEY).plainchickenburger;
                case 'saladchickenburger':
                    return cache.get(AllMENU_CACHE_KEY).saladchickenburger;
                case 'plainsteakburger':
                    return cache.get(AllMENU_CACHE_KEY).plainsteakburger;
            }

        };





        return service;

        function init() {

            cache = new CacheFactory(CACHE_NAME, {
                storageMode: 'localStorage'
            });

            cachedmenue = angular.fromJson(cache.get(MAINMENU_CACHE_KEY)) || [];



        }

        function setCachedmenue(Menu) {
            cache.put(MAINMENU_CACHE_KEY, channels);
        }


    }
} ());