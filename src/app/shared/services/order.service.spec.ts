import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';
import {ApiService} from "./api.service";

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService]
    });
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
