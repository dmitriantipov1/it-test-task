import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupComponent} from './popup/popup.component';
import {PopupService} from "./services/popup.service";


@NgModule({
  declarations: [
    PopupComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [PopupComponent],
  providers: [PopupService]
})
export class PopupWindowModule {
}
