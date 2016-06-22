(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('searchController', SearchController);

    function SearchController($scope, $state, menuService, orderService, $stateParams, $ionicPopup, $ionicHistory) {
         $scope.cartCount = orderService.count();
        function init() {
            $scope.items = orderService.get();
           
       };

        $scope.goBack = function () {
            $state.go('mainmenu');
        };
        
        $scope.goToCart = function () {
                    $state.go('shoppingcart');
                };


        
    init();
    }
} ());
