import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from "./store/store.module";
import { AppComponent } from './app.component';
import { SportstandComponent } from './sportstand/sportstand.component';


@NgModule({
    declarations: [
        AppComponent,
        SportstandComponent
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
