import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ApiService} from "./shared/services/api.service";
import {ProductCardModule} from "./shared/modules/product-card/product-card.module";
import {ProductsModule} from "./components/layout/modules/products/products.module";
import {HeaderModule} from "./components/layout/modules/header/header.module";
import {ContentModule} from "./components/layout/modules/content/content.module";
import {FooterModule} from "./components/layout/modules/footer/footer.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProductCardModule,
    ProductsModule,
    HeaderModule,
    ContentModule,
    FooterModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
