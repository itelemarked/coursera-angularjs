(function () {
    'use strict';
    

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var self = this;

        self.items = ShoppingListCheckOffService.getToBuyItems();
        self.click = function (index) {
            ShoppingListCheckOffService.buyItemAtIndex(index);
        }
    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var self = this;

        self.items = ShoppingListCheckOffService.getBoughtItems();
    }


    function ShoppingListCheckOffService() {
        var self = this;

        var toBuyItems = [
            {
                name: 'Coffee',
                quantity: 1
            },
            {
                name: 'Milks',
                quantity: 2
            },
            {
                name: 'Cokes',
                quantity: 3
            },
            {
                name: 'Sprites',
                quantity: 4
            },
            {
                name: 'Rivellas',
                quantity: 5
            },
        ];

        var boughtItems = [];

        self.getToBuyItems = function () {
            return toBuyItems;
        };

        self.getBoughtItems = function () {
            return boughtItems;
        };

        self.buyItemAtIndex = function (index) {
            boughtItems.push(toBuyItems[index]);
            toBuyItems.splice(index, 1);
        };
    }


}());