(function() {
    'use strict';

    angular
        .module('kebabZone')
        .factory('orderService', orderService);

    function orderService($ionicHistory, $rootScope, CacheFactory, $firebaseObject, $q, appConfig) {
        var CACHE_NAME = 'kebabZoneCacheOrders';
        var CACHE_KEY = 'Orders';


        var ORDERTYPE_CACHE_KEY = 'OrderType';

        var orders;
        var cache;
        var cachedmenue;


        init();

        var service = {};


        service.updateOrderItemQuantity = function(orderItem) {

            if (orderItem.quantity === 0) {

                return service.remove(orderItem);

            }

            var nOrderItem = find(orderItem);
            if (nOrderItem) {
                nOrderItem.quantity = orderItem.quantity;
                service.updateCache();

            }
            return;

        };

        service.remove = function(orderItem) {
            var index = service.indexOf(orderItem);

            if (index === -1) {

            } else {

                orders.splice(index, 1);
                service.updateCache();

            }



            return;

        };

        service.indexOf = function(orderItem) {
            var index = -1;

            _.find(orders, function(nOrderItem, nOrderItemIndex) {
                if (nOrderItem.name === orderItem.name && nOrderItem.description === orderItem.description) {
                    index = nOrderItem;
                    return true;
                }

            });
            return index;
        };


        service.addOrder = function(orderItem) {
            var nOrderItem = find(orderItem);
            if (nOrderItem) {
                nOrderItem.quantity += 1;
                service.updateCache();
                return;
            }
            orders.push(orderItem);
            service.updateCache();
        };


        service.getOrderType = function() {
            return cache.get(ORDERTYPE_CACHE_KEY);
        };

        service.getOrderNo = function() {
            var deferred = $q.defer();

            var ref = new Firebase(appConfig.fireBaseURL);
            var ordersRef = ref.child("orders");
            var orderNo = 1;
            var reportDate = moment(new Date(Date.now())).format('YYYY-MM-DD ');
            ordersRef.orderByChild("cartdate").startAt(reportDate).limitToLast(1).on("value", function(snapshot) {
                var lastOrder = angular.fromJson(snapshot.val()) || [];
                if (!lastOrder || lastOrder.length==0){
                deferred.resolve(orderNo);    
                }
                lastOrder = _.compact(lastOrder);
                orderNo = lastOrder[0].orderNo
                orderNo +=1;

                deferred.resolve(orderNo);
            }, function(errorObject) {
                console.log("The read failed: " + errorObject.code);
                deferred.resolve(orderNo);
            });
            return deferred.promise;

        };


        service.getDailyReport = function() {
            var deferred = $q.defer();
            var ref = new Firebase(appConfig.fireBaseURL);
            var ordersRef = ref.child("orders");
            var cartTotal = 0;
            var reportDate = moment(new Date(Date.now())).format('YYYY-MM-DD ');
            ordersRef.orderByChild("cartdate").startAt(reportDate).on("value", function(snapshot) {
                //console.log(snapshot.key());

                console.log(snapshot.numChildren());
                console.log('messages in range', snapshot.val());
                var messages = angular.fromJson(snapshot.val()) || [];
                _.each(messages, function(message) {
                    //message.dateReceived = new Date(message.dateReceived);
                    console.log('cartTotal ', message.cartTotal);
                    cartTotal += message.cartTotal;
                    console.log('sum ', cartTotal);

                });

                var dailyReport = {

                    transactionsCount: snapshot.numChildren() || 0,
                    totalOrders: cartTotal || 0

                }

                deferred.resolve(dailyReport);
            }, function(errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
            return deferred.promise;

        };

        service.setOrderType = function(orderType) {
            cache.put(ORDERTYPE_CACHE_KEY, orderType);
        };



        service.placeOrders = function(orderItems, cartTotal, customerDetails) {
            if (orderItems.length === 0) {
                return;
            }

            var updatedorderItems = angular.copy(orderItems);

            var ref = new Firebase(appConfig.fireBaseURL);
            var ordersRef = ref.child("orders");
            service.getOrderNo().then(function(data) {

                var newPostRef = ordersRef.push();
                newPostRef.set({

                    cartTotal: cartTotal,
                    cartdate: moment(new Date(Date.now())).format('YYYY-MM-DD hh:mm:ss'),
                    orderType: service.getOrderType(),
                    orders: updatedorderItems,
                    customerDetails: customerDetails,
                    orderNo: data

                });

                orders = [];
                service.clearCache();

                $rootScope.$broadcast('orderService:orderplaced', service.count());
            })








        };


        service.updateCache = function() {
            if (orders.length === 0) {
                cache.remove(CACHE_KEY);
            } else {
                cache.put(CACHE_KEY, angular.toJson(orders));
            }

            $rootScope.$broadcast('orderService:countChanged', service.count());


        };

        service.clearCache = function() {
            cache.remove(CACHE_KEY);
            cache.remove(ORDERTYPE_CACHE_KEY);
        };



        service.get = function() {
            var jsonObject = angular.fromJson(cache.get(CACHE_KEY)) || [];
            return _.compact(angular.copy(jsonObject));
        };





        service.count = function() {

            var cartCount = 0;

            _.each(orders, function(item) {

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
                return _.find(orders, function(nOrderItem) {
                    return nOrderItem.name === orderItem.name && nOrderItem.description === orderItem.description;
                });
            }
        }


        function getCachedOrders() {
            orders = angular.fromJson(cache.get(CACHE_KEY)) || [];

        }




    }
}());