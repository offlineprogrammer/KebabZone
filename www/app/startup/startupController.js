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


          //  loadingService.show();


            menuService.getAllMenuData().then(function () {

                $state.go('home');
            })










        }

        $timeout(function () {
            init();

            $scope.$on('$ionicView.beforeEnter', function () {
                init();
            });
        }, 2000);
    }
} ());