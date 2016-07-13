(function() {
    'use strict';

    angular
        .module("kebabZone")
        .controller('homeController', HomeController);

    function HomeController($ionicHistory, $scope, $state, $timeout, appConfig, orderService) {
        function init() {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });


            $scope.startOrder = function(orderType) {
                orderService.setOrderType(orderType);
                $state.go('mainmenu');
            };

            $scope.dailyReport = function() {
                $state.go('dailyreport');
            };

        }

        $timeout(function() {
            init();

            $scope.$on('$ionicView.beforeEnter', function() {
                init();
            });
        }, 2000);
    }
}());