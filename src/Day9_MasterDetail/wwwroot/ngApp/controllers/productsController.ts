namespace MyApp.Controllers {

    export class ProductsController {
        public products;
        constructor() {
            this.getProducts();
        }

        getProducts() {
            this.products = [
                { id: 1, name: 'Milk', price: 5.00 },
                { id: 2, name: 'Cheese', price: 17.00 },
                { id: 3, name: 'Apple', price: 0.79 },
            ];
        }
    }
}