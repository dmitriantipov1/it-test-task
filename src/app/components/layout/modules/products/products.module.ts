import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from "./components/products/products.component";
import {LoaderModule} from "../../../../shared/modules/loader/loader.module";
import {ProductCardModule} from "../../../../shared/modules/product-card/product-card.module";



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    LoaderModule,
    ProductCardModule
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
