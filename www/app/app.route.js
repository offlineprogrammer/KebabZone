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
                .state('burgers', {
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
                })
                .state('mealdeals', {
                    url: '/mealdeals',
                    templateUrl: 'app/mealdeals/mealdealmenu.html',
                    controller: 'mealdealmenuController',
                })
                .state('kebabs', {
                    url: '/kebabs',
                    templateUrl: 'app/kebabs/kebabsmenu.html',
                    controller: 'kebabsmenuController',
                })
                .state('kidsdeals', {
                    url: '/kidsdeals',
                    templateUrl: 'app/kidsdeals/kidsdealsmenu.html',
                    controller: 'kidsdealsmenuController',
                })
                .state('softdrinks', {
                    url: '/softdrinks',
                    templateUrl: 'app/softdrinks/softdrinksmenu.html',
                    controller: 'softdrinksController',
                })
                .state('sundrise', {
                    url: '/sundrise',
                    templateUrl: 'app/sundrise/sundrisemenu.html',
                    controller: 'sundriseController',
                })
                .state('orderItem', {
                     cache: false,
                    url: '/showOrderItem/:orderId',
                    templateUrl: 'app/orderitem/orderitem.html',
                    controller: 'orderitemController',
                })
                .state('shoppingcart', {
                    cache: false,
                    url: '/shoppingcart',
                    templateUrl: 'app/shoppingcart/shoppingCart.html',
                    controller: 'shoppingCartController',
                })
                .state('starters', {
                    url: '/starters',
                    templateUrl: 'app/starters/startersmenu.html',
                    controller: 'startersController',
                });
                
            $urlRouterProvider.otherwise('/startup');
        });
}());