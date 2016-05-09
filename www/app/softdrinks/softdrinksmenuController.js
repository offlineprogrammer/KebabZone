(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('softdrinksController', SoftDrinksMenuController);

    function SoftDrinksMenuController($scope, $state, menuService) {
        function init() {

            $scope.items = menuService.getSoftDrinksMenu();
                   
           
        }


        init();
    }
}());
