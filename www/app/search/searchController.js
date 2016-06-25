(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('searchController', SearchController);

    function SearchController($scope, $state, menuService, orderService, $stateParams, $ionicPopup, $ionicHistory, $timeout, $ionicScrollDelegate) {
        $scope.cartCount = orderService.count();
        function init() {
            $scope.typeAheadSearchComplete = false;
            $scope.typeAhead = {
                searchText: ''
            };
            $scope.menuItems = [];

        };

        var selectedIndex;


        $scope.goBack = function () {
            $state.go('mainmenu');
        };

        $scope.goToCart = function () {
            $state.go('shoppingcart');
        };

        $scope.isSelected = function (index) {
            return index === selectedIndex;
        };


        $scope.typeAheadSearch = function () {
            $scope.typeAheadSearchComplete = false;
            $scope.menuItems = [];
            resetSelection();

            if ($scope.typeAhead.searchText.length > 0) {


                menuService.menuSearch($scope.typeAhead.searchText)
                    .then(function (data) {
                        if (data) {
                            $scope.menuItems = data;
                            $scope.typeAheadSearchComplete = true;
                        }
                    })
                    .finally(function () {

                    });
            }

            $ionicScrollDelegate.resize();
        };

        $scope.select = function (index, event) {
            if ($scope.isSelected(index)) {
                resetSelection();
            } else {
                selectedIndex = index;
                scrollIntoView(event.currentTarget);
            }
        };

        function resetSelection() {
            $timeout(function () {
                selectedIndex = -1;

            });
        }

        function scrollIntoView(element) {
            $timeout(function () {
                var height = element.offsetHeight;
                var listContainer = element.offsetParent;
                var scrollContainer = listContainer.offsetParent;
                var scrollHeight = scrollContainer.offsetHeight;
                var offsetTop = element.offsetTop + listContainer.offsetTop;

                var scrollPosition = $ionicScrollDelegate.getScrollPosition();

                if (scrollPosition.top > offsetTop) {
                    $ionicScrollDelegate.scrollTo(0, offsetTop - 10, true);
                } else if (scrollPosition.top + scrollHeight < offsetTop + height) {
                    $ionicScrollDelegate.scrollTo(0, offsetTop + height - scrollHeight + 10, true);
                }
            }, 500);
        }



        init();
    }
} ());
