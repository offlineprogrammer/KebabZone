(function () {
    'use strict';

    angular
        .module('kebabZone')
        .directive('kzQuantity', kzQuantity);

    function kzQuantity($compile, $ionicActionSheet) {
        return {
            restrict: "A",
            replace: true,
            require: '?ngModel',
            scope: {},
            templateUrl: 'app/directives/templates/kzQuantity.tpl.html',
            link: function ($scope, element, attrs, ngModel) {
                $scope.quantity = function () {
                    return parseInt(ngModel.$viewValue);
                };

                $scope.showOptions = function () {
                    $ionicActionSheet.show({
                        buttons: buildButtons(),
                        destructiveText: 'Remove',
                        titleText: 'Change Quantity',
                        cancelText: 'Cancel',
                        cssClass: 'kz-quantity-action-sheet active-' + $scope.quantity(),
                        cancel: function () {},
                        buttonClicked: function (index) {
                            ngModel.$setViewValue(index + 1);
                            return true;
                        },
                        destructiveButtonClicked: function () {
                            ngModel.$setViewValue(0);
                            return true;
                        }
                    });
                };

                function buildButtons() {
                    var buttons = [];

                    for (var i = 1; i <= 5; i++) {
                        buttons.push({
                            text: i
                        });
                    }

                    return buttons;
                }
            }
        };
    }
}());
