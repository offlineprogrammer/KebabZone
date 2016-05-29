(function () {
    'use strict';

    angular
        .module("kebabZone")
        .constant('appConfig', {           
            appName: 'Kebab Zone App',           
            fireBaseURL: 'https://kebab-zone.firebaseio.com/'

        });
}());