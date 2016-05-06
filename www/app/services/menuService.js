(function() {
    'use strict';

    angular
        .module('kebabZone')
        .factory('menuService', menuService);

    function menuService($ionicHistory, $rootScope, dataService, CacheFactory,MenuData) {
        var CACHE_NAME = 'kebabZoneCache';
        var MAINMENU_CACHE_KEY = 'MainMenu';


        var cache;
        var cachedmenue;


        init();

        var service = {};

        
        service.getMenu = function() {
            return angular.copy(MenuData.mainMenuData);

            
        };
        
        
        service.getBurgerMenu = function() {
            return angular.copy(MenuData.burgerMenuData);

            
        };
        
         service.getChikenBurgerMenu = function() {
            return angular.copy(MenuData.chikenburgerMenuData);

            
        };
        
        service.getSteakBurgerMenu = function() {
            return angular.copy(MenuData.steakburgerMenuData);

            
        };
        
        service.getOtherBurgerMenu = function() {
            return angular.copy(MenuData.otherburgerMenuData);

            
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
}());