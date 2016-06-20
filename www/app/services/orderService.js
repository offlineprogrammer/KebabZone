(function () {
    'use strict';

    angular
        .module('kebabZone')
        .factory('orderService', orderService);

    function orderService($ionicHistory, $rootScope, CacheFactory, $firebaseObject, $q, appConfig) {
        var CACHE_NAME = 'kebabZoneCacheOrders';
        var CACHE_KEY = 'Orders';
        var orders;
        var cache;
        var cachedmenue;


        init();

        var service = {};


        service.addOrder = function (orderItem) {
             orders.push(orderItem);
              service.updateCache();
        };
        
        
        service.updateCache = function () {
            if (orders.length === 0) {
                cache.remove(CACHE_KEY);
            } else {
                cache.put(CACHE_KEY, angular.toJson(orders));
            }
        };
        
        
        service.count = function () {
            var ordersCount = 0;
            return orders.length;
        };

        return service;

        function init() {

            cache = new CacheFactory(CACHE_NAME, {
                storageMode: 'localStorage'
            });
            
            getCachedOrders();
        }
        
        function getCachedOrders() {
            orders = angular.fromJson(cache.get(CACHE_KEY)) || [];
            
        }

        


    }
} ());