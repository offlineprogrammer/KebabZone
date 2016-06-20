(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('shoppingCartController', ShoppingCartController);

    function ShoppingCartController($scope, $state, menuService,$stateParams,$ionicPopup,$ionicHistory) {
        function init() {
            
            var orderItemId = $stateParams.orderId;

            $scope.orderItem = menuService.getOrderItem(orderItemId);
             var orderOptions = angular.fromJson($scope.orderItem.Options) || [];
             
            $scope.orderOptions = _.compact(angular.copy(orderOptions));
            
           
            
        }
        
        $scope.goBack = function () {
                    $ionicHistory.goBack();
                };
                
        
        function findSelectedOption(optionItems,name) {
            return _.find(optionItems, function (selectedOption) {
                return selectedOption.name === name;
            });
        }

      $scope.showOptions =  function (optionsItem,index) {
            
            var optionItems = optionsItem.Items; 
            optionItems =_.compact(angular.copy(optionItems))
            
            
             var oSelectedOption = findSelectedOption(optionItems, optionsItem.name);
           
            
         
            
            $scope.data = {
                optionItems: optionItems,
                selectedMatch: oSelectedOption
            };
            
            
           var prompt = $ionicPopup.show({
                    title: 'Select',
                    cssClass: 'popup-autowidth',
                    templateUrl: 'app/orderitem/orderitemoptions.tbl.html',
                    scope: $scope,
                    buttons: [{
                        text: 'cancel',
                        type: 'button-positive'
                    }, {
                        text: 'select',
                        type: 'button-positive disabled',
                        onTap: function (e) {
                            if (!$scope.data.selectedMatch) {
                                e.preventDefault();
                            } else {
                                return $scope.data.selectedMatch;
                            }
                        }
                    }]
                });
                
                 prompt.then(function (result) {
                   // delete $scope.data;

                    if (result) {
                        optionsItem.name = result.name;
                        

                    }

                   
                });
                
        }



        init();
    }
}());
