(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('burgersController', MenuController);

    function MenuController($scope, $state, menuService) {
        function init() {

            $scope.items = menuService.getBurgerMenu();
                   
           
        }


        init();
    }
}());
