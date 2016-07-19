(function() {
    'use strict';

    angular
        .module('kebabZone')
        .controller('shoppingCartController', ShoppingCartController);

    function ShoppingCartController($scope, $state, menuService, orderService, $stateParams, $ionicPopup, $ionicHistory) {
        function init() {
            $scope.items = orderService.get();
            $scope.orderType = orderService.getOrderType();
            $scope.deliveryCharges = 2;
            calculateTotal();
        };

        $scope.goBack = function() {
            $state.go('home');
        };

        $scope.customer = {};


        $scope.Order = function() {
            orderService.placeOrders($scope.items, $scope.cartTotal, $scope.customer);
        };


        $scope.updateQuantity = function(orderItem) {
            orderItem.quantity = Number(orderItem.quantity);
            orderService.updateOrderItemQuantity(orderItem);
            $scope.items = orderService.get();

            if ($scope.items.length === 0) {
                $state.go('home');
            }

            calculateTotal();
        };

         $scope.updateTotal = function() {
             if ($scope.orderType === 'deliveryOrder' ) {
                $scope.cartTotal = $scope.cartTotal + $scope.deliveryCharges;
            }


           
        };




        $scope.$on('orderService:orderplaced', function(event, count) {
            $scope.cartCount = 0;
            $state.go('home');
        });

        function calculateTotal() {

            var total = 0;

            _.each($scope.items, function(item) {
                total += item.quantity * item.price;
            });

            if ($scope.orderType === 'deliveryOrder' ) {
                total = total + $scope.deliveryCharges;
            }


            $scope.cartTotal = total;
        }

        init();
    }
}());