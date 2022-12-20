import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FooterComponent} from './footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OrderService} from "../../../../../../shared/services/order.service";
import {PopupService} from "../../../../../../shared/modules/popup-window/services/popup.service";
import {ApiService} from "../../../../../../shared/services/api.service";

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ FooterComponent ],
      providers: [ApiService, OrderService, PopupService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call checkValue method when keydown event', () => {
    const event = new KeyboardEvent('keydown',{'key': 'M'});
    fixture.detectChanges();
    const spy = spyOn(component, 'checkValue');
    fixture.nativeElement.dispatchEvent(event);
    component.checkValue(event);
    expect(spy).toHaveBeenCalled()
  });

  it('should return false if input text include point',  () => {
    const keyDownEvent = new KeyboardEvent('keydown', {key: '.', bubbles: true, cancelable: false});
    const result = component.checkValue(keyDownEvent);
    expect(result).toBeFalse();
  });
});
