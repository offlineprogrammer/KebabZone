(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('mealdealmenuController', MealDealMenuController);

    function MealDealMenuController($scope, $state, menuService) {
        function init() {

            $scope.items = menuService.getMealDealMenu();
                   
           
        }


        init();
    }
}());
