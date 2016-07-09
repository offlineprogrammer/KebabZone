(function () {
    'use strict';

    angular
        .module('kebabZone')
        .factory('loadingService', loadingService);

    function loadingService($ionicLoading) {
        var service = {
            show: show,
            hide: hide
        };

        function show() {
            $ionicLoading.show({
                template: '<img src="img/spinner.gif">',
                delay: 100
            });
        }

        function hide() {
            $ionicLoading.hide();
        }

        return service;
    }
}());
