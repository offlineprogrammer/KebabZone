(function() {
    'use strict';

    angular
        .module('kebabZone')
        .controller('shoppingCartController', ShoppingCartController);

    function ShoppingCartController($scope, $state, menuService, orderService, $stateParams, $ionicPopup, $ionicHistory) {
        function init() {
            $scope.items = orderService.get();
            $scope.orderCart = {
                deliveryCharges: 2,
                orderType: orderService.getOrderType(),
                items: orderService.get()
            };


            $scope.calculateTotal();
        };

        $scope.goBack = function() {
            $state.go('home');
        };

        $scope.customer = {};


        $scope.Order = function() {
            orderService.placeOrders($scope.orderCart.items, $scope.cartTotal, $scope.customer);
        };


        $scope.updateQuantity = function(orderItem) {
            orderItem.quantity = Number(orderItem.quantity);
             $scope.calculateTotal();
             
            //$scope.orderCart.items = [];
            orderService.updateOrderItemQuantity(orderItem).then(function(data) {

                // $scope.orderCart.items = orderService.get();

                // if ($scope.orderCart.items.length === 0) {
                //     $state.go('home');
                // }

                // $scope.calculateTotal();
            })

        };

        $scope.updateTotal = function() {
            if ($scope.orderCart.orderType === 'deliveryOrder') {
                $scope.cartTotal = $scope.cartTotal + $scope.orderCart.deliveryCharges;
            }



        };




        $scope.$on('orderService:orderplaced', function(event, count) {
            $scope.cartCount = 0;
            $state.go('home');
        });


        $scope.calculateTotal = function() {

            var total = 0;

            _.each($scope.orderCart.items, function(item) {
                total += item.quantity * item.price;
            });

            if ($scope.orderCart.orderType === 'deliveryOrder') {
                total = total + $scope.orderCart.deliveryCharges;
            }


            $scope.cartTotal = total;
        }

        init();
    }
}());