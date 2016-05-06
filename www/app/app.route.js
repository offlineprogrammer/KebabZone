(function() {
    'use strict';

    angular.module('kebabZone')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('startup', {
                    url: '/startup',
                    templateUrl: 'app/startup/startup.html',
                    controller: 'StartupController',
                })
                .state('mainmenu', {
                    url: '/mainmenu',
                    templateUrl: 'app/mainmenu/menu.html',
                    controller: 'MenuController',
                })
                .state('burgersmenu', {
                    url: '/burgersmenu',
                    templateUrl: 'app/burgers/burgersmenu.html',
                    controller: 'burgersController',
                })
                .state('chikenburgersmenu', {
                    url: '/burgersmenu/chikenburgersmenu',
                    templateUrl: 'app/burgers/chikenburger/chikenburgermenu.html',
                    controller: 'chikenburgerController',
                })
                .state('steakburgersmenu', {
                    url: '/burgersmenu/steakburgersmenu',
                    templateUrl: 'app/burgers/steakburger/steakburgermenu.html',
                    controller: 'steakburgerController',
                })
                .state('otherburgersmenu', {
                    url: '/burgersmenu/otherburgersmenu',
                    templateUrl: 'app/burgers/otherburger/otherburgermenu.html',
                    controller: 'otherburgerController',
                });
            $urlRouterProvider.otherwise('/startup');
        });
}());