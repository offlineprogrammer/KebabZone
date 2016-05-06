(function () {
    'use strict';

    angular
        .module("kebabZone")
        .constant('appConfig', {
           
            appName: 'Kebab Zone App',
           
            webApiRoot: 'https://www.googleapis.com/youtube/v3/'

        });
}());