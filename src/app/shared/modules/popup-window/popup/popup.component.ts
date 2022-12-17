import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {PopupService} from "../services/popup.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() text: string;
  isOpenModal$ = this.popupService.isModalOpen$;


  constructor(private elRef: ElementRef, private popupService: PopupService) {
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: Event): void {
    if (this.elRef && !this.elRef.nativeElement.contains(event.target)) {
      this.popupService.modalToggle(false);
    }
  }
}
