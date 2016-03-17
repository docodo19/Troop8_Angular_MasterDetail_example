namespace MyApp.Controllers {

    export class DetailsController {
        public products = [
            { id: 1, name: 'Milk', price: 5.00 },
            { id: 2, name: 'Cheese', price: 17.00 },
            { id: 3, name: 'Apple', price: 0.79 },
        ];

        public product;

        constructor(private $stateParams: ng.ui.IStateParamsService) {
            // ^ $stateParams can extract the id number from the URL

            // call the getProduct() method as soon as the details page loads
            this.getProduct();
        }

        getProduct() {
            let productId = this.$stateParams['id'];

            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].id == productId) {
                    this.product = this.products[i];
                }
            }


            //this.product = this.products.filter((product) => {
            //    return product.id == this.$stateParams['id']
            //})[0];
        }
    }
}