(function() {
    'use strict';

    angular
        .module("kebabZone")
        .controller('driverreportController', DriverReportController);

    function DriverReportController($ionicHistory, $scope, $state, appConfig, orderService) {
        function init() {
            orderService.getDailyReport().then(function (data) {

                 $scope.dailyReport = data;
            })
        }

        init();
    }
}());