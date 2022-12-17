import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {ReactiveFormsModule} from "@angular/forms";
import {LoaderModule} from "../../../../shared/modules/loader/loader.module";


@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderModule,
  ]
})
export class FooterModule { }
