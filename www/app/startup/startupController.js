(function () {
    'use strict';

    angular
        .module("kebabZone")
        .controller('StartupController', StartupController);

    function StartupController($ionicHistory, $scope, $state, $timeout, appConfig, menuService) {
        function init() {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });


           $scope.menuReady =  menuService.getAllMenuData();










        }

        $timeout(function () {
            init();

            $scope.$on('$ionicView.beforeEnter', function () {
                init();
            });
        }, 2000);
    }
} ());