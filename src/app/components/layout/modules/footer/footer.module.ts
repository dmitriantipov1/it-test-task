import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {ReactiveFormsModule} from "@angular/forms";
import {LoaderModule} from "../../../../shared/modules/loader/loader.module";
import {PopupWindowModule} from "../../../../shared/modules/popup-window/popup-window.module";


@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderModule,
    PopupWindowModule,
  ]
})
export class FooterModule { }
