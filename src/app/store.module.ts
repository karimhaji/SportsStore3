import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "./model/model.module";
import { StoreComponent } from "./store/store.component";
import { CounterDirective } from "./store/counter.directive";
import { CartSummaryComponent } from "./store/cartSummary.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { CheckoutComponent } from "./store/checkout.component";
import { RouterModule } from "@angular/router";

@NgModule({
imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
declarations: [StoreComponent, CounterDirective, CartSummaryComponent,
    CartDetailComponent, CheckoutComponent],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule { }