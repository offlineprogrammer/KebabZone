(function () {
    'use strict';

    angular
        .module('kebabZone')
        .controller('orderitemController', OrderItemController);

    function OrderItemController($scope, $state, menuService,orderService,$stateParams,$ionicPopup,$ionicHistory) {
         $scope.cartCount = orderService.count();
        function init() {
            
            var orderItemId = $stateParams.orderId;

            $scope.orderItem = menuService.getOrderItem(orderItemId);
             var orderOptions = angular.fromJson($scope.orderItem.Options) || [];
             
            $scope.orderOptions = _.compact(angular.copy(orderOptions));
            
           
            
        }
       
        $scope.$on('orderService:countChanged', function (event, count) {
            $scope.cartCount = count;
        });
        
        $scope.goToCart = function () {
                    $state.go('shoppingcart');
                };
                 
        $scope.goBack = function () {
                    $ionicHistory.goBack();
                };
                
        $scope.addToCart = function () {
            var cartorderItem = {
              name:  $scope.orderItem.name,
              image:  $scope.orderItem.image,
              price:  $scope.orderItem.price,
              quantity: 1,
              description: getOrderItemDesc()
            }
            
            orderService.addOrder(cartorderItem);
            $scope.goToCart();
                    
                };
                
        
        function getOrderItemDesc() {
            
            var orderItemDesc = '';

            _.each( $scope.orderOptions, function (item) {
               
                    orderItemDesc += item.name;
                     orderItemDesc += ',';
               
            });

            return orderItemDesc;
           
        }
        
        
        
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
