(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('otherburgerController', OtherBurgerController);

    function OtherBurgerController($scope, $state, menuService) {
        function init() {

            $scope.items = menuService.getOtherBurgerMenu();
                   
           
        }


        init();
    }
}());
