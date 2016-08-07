(function() {
    'use strict';

    angular
        .module("kebabZone")
        .controller('driverreportController', DriverReportController);

    function DriverReportController($ionicHistory, $scope, $state, appConfig, orderService) {
        function init() {
            orderService.getTodayDrivers().then(function (data) {

                 $scope.todayDrivers = data;
            })
        }

        init();
    }
}());