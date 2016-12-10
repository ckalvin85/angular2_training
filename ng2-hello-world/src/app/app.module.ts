import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { HellowWorld1Component } from './hello-world';

import { AppComponent } from './app.component';
import { PageProductsComponent} from "./page-product";
import { PageProductItemComponent} from "./page-productitem";
import { appRoutes } from "./app.routing";
import {RouterModule} from "@angular/router";
import 'rxjs/Rx';
import {ProductService} from './service';

@NgModule({
  declarations: [
    AppComponent,
    // HellowWorld1Component,
    PageProductsComponent,
    PageProductItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
