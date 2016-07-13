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

        }

        $timeout(function() {
            init();

            $scope.$on('$ionicView.beforeEnter', function() {
                init();
            });
        }, 2000);
    }
}());