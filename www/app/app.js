(function () {
    'use strict';

    angular.module('kebabZone', [
        'ionic',
        'ngCordova',
        'angular-cache',
        'firebase',
        'angularMoment'
    ])
        .run(function ($window, appConfig) {
            ionic.Platform.ready(function () {
                if ($window.StatusBar) {
                    $window.StatusBar.styleDefault();
                }

                 if ($window.cordova) {
                        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                        // for form inputs)
                        if ($window.cordova.plugins.Keyboard) {
                            $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                        }

                        if ($window.cordova.logger) {
                            $window.cordova.logger.__onDeviceReady();
                        }

                        
                    }
            });
        })
        .run(function ($http, CacheFactory) {
            $http.defaults.cache = new CacheFactory('httpGetOnlyCache', {
                storageMode: 'localStorage',
                maxAge: 24 * 60 * 60 * 1000, // Items added to this cache expire after 1 day.
                deleteOnExpire: 'aggressive'
            });
        })
        .config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);
});
}());