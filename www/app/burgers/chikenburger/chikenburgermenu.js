(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('chikenburgerController', ChikenBurgerController);

    function ChikenBurgerController($scope, $state, menuService) {
        function init() {

            $scope.items = menuService.getChikenBurgerMenu();
                   
           
        }


        init();
    }
}());
