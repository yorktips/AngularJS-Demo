var mainApp = angular.module('mainApp');

mainApp.service('ProductService', function () {
    //to create unique product id
    var uid = 1;
     
    //products array to hold list of all products
    var products = [{
        id: 0,
        'name': 'Milk',
        'code': 'P1000001',
        'quantity': 10
    },
	{
        id: 1,
        'name': 'egg',
        'code': 'P1000002',
        'quantity': 15
    },
	{
        id: 2,
        'name': 'Cake',
        'code': 'P1000003',
        'quantity': 2
    }
	];
     
    this.save = function (product) {
        if (product.id == null) {
            //if this is new product, add it in products array
            product.id = uid++;
            products.push(product);
        } else {
            //for existing product, find this product using id
            //and update it.
            for (i in products) {
                if (products[i].id == product.id) {
                    products[i] = product;
                }
            }
        }
 
    }
 
    this.get = function (id) {
        for (i in products) {
            if (products[i].id == id) {
                return products[i];
            }
        }
 
    }
     
    //iterate through products list and delete 
    //product if found
    this.delete = function (id) {
        for (i in products) {
            if (products[i].id == id) {
                products.splice(i, 1);
            }
        }
    }
 
    //simply returns the products list
    this.list = function () {
        return products;
    }
});
