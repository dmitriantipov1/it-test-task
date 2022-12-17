import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class PopupService {
  isModalOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  modalToggle(state: boolean): void {
    this.isModalOpen$.next(state);
  }
}
