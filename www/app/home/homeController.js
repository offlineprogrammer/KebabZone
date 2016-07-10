(function () {
    'use strict';

    angular
        .module("kebabZone")
        .controller('homeController', HomeController);

    function HomeController($ionicHistory, $scope, $state, $timeout, appConfig, orderService) {
        function init() {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });


            $scope.onShopOrder = function () {
                orderService.setOrderType('onShop');
                 $state.go('mainmenu');
            };










        }

        $timeout(function () {
            init();

            $scope.$on('$ionicView.beforeEnter', function () {
                init();
            });
        }, 2000);
    }
} ());