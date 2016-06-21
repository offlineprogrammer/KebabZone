(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('shoppingCartController', ShoppingCartController);

    function ShoppingCartController($scope, $state, menuService, orderService,$stateParams,$ionicPopup,$ionicHistory) {
        function init() {
            
           $scope.items = orderService.get();
            
           
            
        }
        
        $scope.goBack = function () {
                    $ionicHistory.goBack();
                };
                
        
         $scope.updateQuantity = function (orderItem) {
            orderItem.quantity = Number(orderItem.quantity);
            orderService.updateOrderItemQuantity(orderItem);
            //calculateTotal();
        };
                
        
       

 


        init();
    }
}());
