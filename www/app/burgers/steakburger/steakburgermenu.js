(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('steakburgerController', SteakBurgerController);

    function SteakBurgerController($scope, $state, menuService) {
        function init() {

            $scope.items = menuService.getSteakBurgerMenu();
                   
           
        }


        init();
    }
}());
