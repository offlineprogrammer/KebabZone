(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('submenuController', SubMenuController);

    function SubMenuController($scope, $state, menuService,orderService,$stateParams) {
        $scope.cartCount = orderService.count();
        function init() {
           
            var subMenuId = $stateParams.submenuId;

            $scope.items = menuService.getSubMenuItems(subMenuId);
            
            
        };
        
        
        
        $scope.goToCart = function () {
                    $state.go('shoppingcart');
                };
                
 


        init();
    }
} ());
