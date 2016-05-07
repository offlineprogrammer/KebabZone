(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('kebabsmenuController', KebabsMenuController);

    function KebabsMenuController($scope, $state, menuService) {
        function init() {

            $scope.items = menuService.getKebabMenu();
                   
           
        }


        init();
    }
}());
