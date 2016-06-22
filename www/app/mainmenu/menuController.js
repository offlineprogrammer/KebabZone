(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('MenuController', MenuController);

    function MenuController($scope, $state, menuService,orderService) {
        $scope.cartCount = orderService.count();
        function init() {
            

            $scope.items = menuService.getMenu();
        };
        
        
        
        $scope.goToCart = function () {
                    $state.go('shoppingcart');
                };
                
 


        init();
    }
} ());
