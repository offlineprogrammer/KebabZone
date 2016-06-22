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


        $scope.updateQuantity = function (orderItem) {
            orderItem.quantity = Number(orderItem.quantity);
            orderService.updateOrderItemQuantity(orderItem);
            $scope.items = orderService.get();
            
             if ($scope.items.length === 0) {
                  $state.go('mainmenu');
             }
            
            calculateTotal();
        };

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
