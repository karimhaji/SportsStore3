import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from "./store/store.module";
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        StoreModule
    ]
})
export class AppModule { 

 
}
imports: [BrowserModule, StoreModule]
