(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('startersController', StartersMenuController);

    function StartersMenuController($scope, $state, menuService) {
        function init() {

            $scope.items = menuService.getStartersMenu();
                   
           
        }


        init();
    }
}());
