(function() {
    'use strict';

    angular
        .module("kebabZone")
        .controller('dailyreportController', DailyReportController);

    function DailyReportController($ionicHistory, $scope, $state, appConfig, orderService) {
        function init() {
            orderService.getDailyReport().then(function (data) {

                 $scope.dailyReport = data;
            })
        }

        init();
    }
}());