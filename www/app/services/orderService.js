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


        service.updateOrderItemQuantity = function (orderItem) {
            var nOrderItem = find(orderItem);
            if (nOrderItem) {
                nOrderItem.quantity = orderItem.quantity;
                service.updateCache();
                
            }
            return;
           
        };


        service.addOrder = function (orderItem) {
            var nOrderItem = find(orderItem);
            if (nOrderItem) {
                nOrderItem.quantity += 1;
                service.updateCache();
                return;
            }
            orders.push(orderItem);
            service.updateCache();
        };


        service.updateCache = function () {
            if (orders.length === 0) {
                cache.remove(CACHE_KEY);
            } else {
                cache.put(CACHE_KEY, angular.toJson(orders));
            }

            $rootScope.$broadcast('orderService:countChanged', service.count());


        };



        service.get = function () {
            var jsonObject = angular.fromJson(cache.get(CACHE_KEY)) || [];
            return _.compact(angular.copy(jsonObject));
        };





        service.count = function () {

            var cartCount = 0;

            _.each(orders, function (item) {

                cartCount += item.quantity;

            });

            return cartCount;

        };

        return service;

        function init() {

            cache = new CacheFactory(CACHE_NAME, {
                storageMode: 'localStorage'
            });

            getCachedOrders();
        }


        function find(orderItem) {
            if (!orderItem) {
                return false;
            } else {
                return _.find(orders, function (nOrderItem) {
                    return (nOrderItem.name === orderItem.name && nOrderItem.description === orderItem.description);
                });
            }
        }


        function getCachedOrders() {
            orders = angular.fromJson(cache.get(CACHE_KEY)) || [];

        }




    }
} ());