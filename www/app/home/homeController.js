(function () {
    'use strict';

    angular
        .module("kebabZone")
        .controller('homeController', HomeController);

    function HomeController($ionicHistory, $scope, $state, $timeout, appConfig, menuService) {
        function init() {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });













        }

        $timeout(function () {
            init();

            $scope.$on('$ionicView.beforeEnter', function () {
                init();
            });
        }, 2000);
    }
} ());