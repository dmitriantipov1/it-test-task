import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../../../../../../shared/services/order.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  form: FormGroup;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isNotificationWindow$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  public send(): void {
    this.isLoading$.next(true);
    this.orderService.makeOrder(this.form.value).subscribe({
      next: (res) => setTimeout(() => this.openNotificationWindow(), 2000)
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

  private openNotificationWindow(): void {
    this.isNotificationWindow$.next(true);
    this.isLoading$.next(false);
    setTimeout(() => this.isNotificationWindow$.next(false), 3000)
  }
}
