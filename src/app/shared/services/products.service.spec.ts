import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import {ApiService} from "./api.service";

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [ApiService]});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
