var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var DetailsController = (function () {
            function DetailsController($stateParams) {
                // ^ $stateParams can extract the id number from the URL
                this.$stateParams = $stateParams;
                this.products = [
                    { id: 1, name: 'Milk', price: 5.00 },
                    { id: 2, name: 'Cheese', price: 17.00 },
                    { id: 3, name: 'Apple', price: 0.79 },
                ];
                // call the getProduct() method as soon as the details page loads
                this.getProduct();
            }
            DetailsController.prototype.getProduct = function () {
                var productId = this.$stateParams['id'];
                for (var i = 0; i < this.products.length; i++) {
                    if (this.products[i].id == productId) {
                        this.product = this.products[i];
                    }
                }
                //this.product = this.products.filter((product) => {
                //    return product.id == this.$stateParams['id']
                //})[0];
            };
            return DetailsController;
        }());
        Controllers.DetailsController = DetailsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=detailsController.js.map