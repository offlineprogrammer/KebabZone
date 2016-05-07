(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('kidsdealsmenuController', KidsDealsMenuController);

    function KidsDealsMenuController($scope, $state, menuService) {
        function init() {

            $scope.items = menuService.getKidsDealMenu();
                   
           
        }


        init();
    }
}());
