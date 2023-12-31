import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
selector: "store",
templateUrl: "store.component.html"

})
export class StoreComponent {
    productsPerPage = 4;
    selectedPage = 1;
    selectedCategory: string | undefined;
    constructor(private repository: ProductRepository,
        private cart: Cart,
        private router: Router) { }

    /*
The constructor has a Router parameter, which is provided by Angular through the dependency
injection feature when a new instance of the component is created. In the addProductToCart method, the
Router.navigateByUrl method is used to navigate to the /cart URL.

*/


    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage
        return this.repository.getProducts(this.selectedCategory)
        .slice(pageIndex, pageIndex + this.productsPerPage);
        //return this.repository.getProducts(this.selectedCategory);
    }
    get categories(): string[] {
        return this.repository.getCategories();
    }
    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
        }
    changePage(newPage: number) {
        this.selectedPage = newPage;
        }
    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }
    // get pageNumbers(): number[] {
    //     return Array(Math.ceil(this.repository
    //     .getProducts(this.selectedCategory).length / this.productsPerPage))
    //     .fill(0).map((x, i) => i + 1);
    // }
    get pageCount(): number {
        return Math.ceil(this.repository
        .getProducts(this.selectedCategory).length / this.productsPerPage)
        }
    addProductToCart(product: Product) {
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
        }
}