(function () {
    'use strict';

    angular
        .module("kebabZone")
        .constant('MenuData', {
            mainMenuData: [{
                "option": "16.49.52.68",
                "name": "Kebabs"
            }, {
                    "option": "16.49.53.208",
                    "name": "Burgers"
                }, {
                    "option": "16.49.52.65",
                    "name": "Pizzas"
                }, {
                    "option": "16.49.54.4",
                    "name": "Chips"
                }, {
                    "option": "16.49.54.4",
                    "name": "Bread & Carlic"
                }, {
                    "option": "16.49.54.135",
                    "name": "Starters"
                }, {
                    "option": "16.49.52.69",
                    "name": "Drinks"
                }, {
                    "option": "16.49.54.41",
                    "name": "Rice & Curry"
                }, {
                    "option": "16.49.52.14",
                    "name": "Box Of Meat",

                }, {
                    "option": "16.49.52.73",
                    "name": "Kids"
                }, {
                    "option": "16.49.52.72",
                    "name": "Sundnes"
                }, {
                    "option": "16.49.52.72",
                    "name": "Meals Deals"
                }, {
                    "option": "16.49.52.53",
                    "name": "Special Offers",

                }

            ],

            burgerMenuData: [{
                "id": "1",
                "name": "Chicken Burger",
                "image": "img/Chicken-Burgers.jpg",
                "sref": "chikenburgersmenu"
            },
                {
                    "id": "2",
                    "name": "Steak Burger",
                    "image": "img/Steakburger.png",
                    "sref": "steakburgersmenu"
                }, {
                    "id": "3",
                    "name": "Other Burger",
                    "image": "img/otherBurger.jpg",
                    "sref": "otherburgersmenu"
                }
            ],

            chikenburgerMenuData: [{
                "id": "1",
                "name": "Plain Chicken Burger",
                "image": "img/Chicken-Burgers.jpg"
            },
                {
                    "id": "2",
                    "name": "Salad Chicken Burger",
                    "image": "img/Steakburger.png"
                }, {
                    "id": "3",
                    "name": "Cheesy Chicken Burger",
                    "image": "img/otherBurger.jpg"
                }, {
                    "id": "4",
                    "name": "Hawaian Chicken Burger",
                    "image": "img/otherBurger.jpg"
                }
            ],
             steakburgerMenuData: [{
                "id": "1",
                "name": "Plain Steak Burger",
                "image": "img/Chicken-Burgers.jpg"
            },
                {
                    "id": "2",
                    "name": "Salad Steak Burger",
                    "image": "img/Steakburger.png"
                }, {
                    "id": "3",
                    "name": "Cheesy Steak Burger",
                    "image": "img/otherBurger.jpg"
                }, {
                    "id": "4",
                    "name": "Hawaian Steak Burger",
                    "image": "img/otherBurger.jpg"
                }, {
                    "id": "4",
                    "name": "TexMix Steak Burger",
                    "image": "img/otherBurger.jpg"
                }, {
                    "id": "4",
                    "name": "Chef Steak Burger",
                    "image": "img/otherBurger.jpg"
                }
            ],
             otherburgerMenuData: [{
                "id": "1",
                "name": "Sasuge Burger",
                "image": "img/Chicken-Burgers.jpg"
            },
                {
                    "id": "2",
                    "name": "Cheesy Sasuge Burger",
                    "image": "img/Steakburger.png"
                }, {
                    "id": "3",
                    "name": "Veggie Burger",
                    "image": "img/otherBurger.jpg"
                }, {
                    "id": "4",
                    "name": "Doner Meat Burger",
                    "image": "img/otherBurger.jpg"
                }
            ]

        });

} ());
