import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ProductsComponent} from "./products.component";
import {ProductsService} from "../../../../../../shared/services/products.service";
import {ApiService} from "../../../../../../shared/services/api.service";

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      providers: [ProductsService, ApiService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call fetch data method when component was init', () => {
    spyOn(component, 'fetchData');
    component.fetchData();
    expect(component.fetchData).toHaveBeenCalled();
  });

  it('should close photo when clicked outside', () => {
    component.url = 'https://fake-image.url';
    const e = new MouseEvent('click');
    component.clickOut(e);
    expect(component.url).toBeNull();
  });

  it('should open photo', () => {
    component.openPhoto('https://fake-image.url');
    expect(component.url).toBe('https://fake-image.url');
  });
});
