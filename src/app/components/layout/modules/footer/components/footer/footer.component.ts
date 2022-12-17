import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../../../../../../shared/services/order.service";
import {BehaviorSubject} from "rxjs";
import {PopupService} from "../../../../../../shared/modules/popup-window/services/popup.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  form: FormGroup;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isOpenModal$ = this.popupService.isModalOpen$;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private popupService: PopupService
  ) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  public send(): void {
    this.isLoading$.next(true);
    this.orderService.makeOrder(this.form.value).subscribe({
      next: (res) => setTimeout(() => this.openPopup(), 2000)
    });
  }

  private initializeValues(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    })
  }

  checkValue($event: KeyboardEvent) {
    const point = $event.key;
    if (point === '.') {
      $event.preventDefault();
    }
  }

  private openPopup(): void {
    this.popupService.modalToggle(true);
    this.isLoading$.next(false);
    setTimeout(() => this.popupService.modalToggle(false), 3000)
  }
}
