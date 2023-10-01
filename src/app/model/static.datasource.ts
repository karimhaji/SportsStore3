import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";
@Injectable()
export class StaticDataSource {
        private Products: Product[] = [
        new Product(1, "کالا 1", "گروه 1", "کالا 1 (گروه 1)", 100),
        new Product(2, "کالا 2", "گروه 1", "کالا 2 (گروه 1)", 100),
        new Product(3, "کالا 3", "گروه 1", "کالا 3 (گروه 1)", 100),
        new Product(4, "کالا 4", "گروه 1", "کالا 4 (گروه 1)", 100),
        new Product(5, "کالا 5", "گروه 1", "کالا 5 (گروه 1)", 100),
        new Product(6, "کالا 6", "گروه 2", "کالا 6 (گروه 2)", 100),
        new Product(7, "کالا 7", "گروه 2", "کالا 7 (گروه 2)", 100),
        new Product(8, "کالا 8", "گروه 2", "کالا 8 (گروه 2)", 100),
        new Product(9, "کالا 9", "گروه 2", "کالا 9 (گروه 2)", 100),
        new Product(10, "کالا 10", "گروه 2", "کالا 10 (گروه 2)", 100),
        new Product(11, "کالا 11", "گروه 3", "کالا 11 (گروه 3)", 100),
        new Product(12, "کالا 12", "گروه 3", "کالا 12 (گروه 3)", 100),
        new Product(13, "کالا 13", "گروه 3", "کالا 13 (گروه 3)", 100),
        new Product(14, "کالا 14", "گروه 3", "کالا 14 (گروه 3)", 100),
        new Product(15, "کالا 15", "گروه 3", "کالا 15 (گروه 3)", 100),
        ];
        getProducts(): Observable<Product[]> {
            return from([this.Products]);
        }
}