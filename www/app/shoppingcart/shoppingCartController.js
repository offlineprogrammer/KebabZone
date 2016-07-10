(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('shoppingCartController', ShoppingCartController);

    function ShoppingCartController($scope, $state, menuService, orderService, $stateParams, $ionicPopup, $ionicHistory) {
        function init() {
            $scope.items = orderService.get();
            calculateTotal();
       };

        $scope.goBack = function () {
            $state.go('mainmenu');
        };


        $scope.Order = function () {
            orderService.placeOrders($scope.items, $scope.cartTotal);
        };


        $scope.updateQuantity = function (orderItem) {
            orderItem.quantity = Number(orderItem.quantity);
            orderService.updateOrderItemQuantity(orderItem);
            $scope.items = orderService.get();
            
             if ($scope.items.length === 0) {
                  $state.go('home');
             }
            
            calculateTotal();
        };

         $scope.$on('orderService:orderplaced', function (event, count) {
            $scope.cartCount = 0;
            $state.go('home');
        });

        function calculateTotal() {
            
            var total = 0;

            _.each($scope.items, function (item) {
                total += item.quantity * item.price;
            });

            $scope.cartTotal = total;
        }

    init();
    }
} ());
