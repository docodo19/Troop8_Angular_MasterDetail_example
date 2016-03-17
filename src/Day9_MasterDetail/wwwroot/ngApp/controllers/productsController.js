var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ProductsController = (function () {
            function ProductsController() {
                this.getProducts();
            }
            ProductsController.prototype.getProducts = function () {
                this.products = [
                    { id: 1, name: 'Milk', price: 5.00 },
                    { id: 2, name: 'Cheese', price: 17.00 },
                    { id: 3, name: 'Apple', price: 0.79 },
                ];
            };
            return ProductsController;
        }());
        Controllers.ProductsController = ProductsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=productsController.js.map