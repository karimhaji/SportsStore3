import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from "./store/store.module";
import { AppComponent } from './app.component';
import { SportstandComponent } from './sportstand/sportstand.component';
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        AppComponent,
        SportstandComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, StoreModule,
        RouterModule.forRoot([
        { path: "store", component: StoreComponent },
        { path: "cart", component: CartDetailComponent },
        { path: "checkout", component: CheckoutComponent },
        { path: "**", redirectTo: "/store" }
        ])],
})
export class AppModule { 

 
}
imports: [BrowserModule, StoreModule]
