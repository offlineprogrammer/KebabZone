(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('sundriseController', SundriseMenuController);

    function SundriseMenuController($scope, $state, menuService) {
        function init() {

            $scope.items = menuService.getSundriseMenu();
                   
           
        }


        init();
    }
}());
