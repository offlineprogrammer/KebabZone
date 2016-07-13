(function() {
    'use strict';

    angular
        .module("kebabZone")
        .controller('dailyreportController', DailyReportController);

    function DailyReportController($ionicHistory, $scope, $state, appConfig, orderService) {
        function init() {
            $scope.dailyReport = orderService.getDailyReport();
        }

        init();
    }
}());