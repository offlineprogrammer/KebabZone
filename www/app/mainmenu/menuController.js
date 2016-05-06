(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('MenuController', MenuController);

    function MenuController($scope, $state, menuService) {
        function init() {

            $scope.items = menuService.getMenu();
                   
           
        }


        init();
    }
}());
