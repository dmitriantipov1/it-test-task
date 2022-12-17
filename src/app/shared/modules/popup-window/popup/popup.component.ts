import {Component, ElementRef, HostListener, Input} from '@angular/core';
import {PopupService} from "../services/popup.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() text: string;

  constructor(private ref: ElementRef, private popupService: PopupService) {
  }

  @HostListener('document: click', ['$event'])
  clickOut(event: Event): void {
    if (!this.ref.nativeElement.contains(event.target)) {
      this.popupService.modalToggle(false);
    }
  }
}
