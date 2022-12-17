import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {OrderRequestInterface} from 'src/app/types/OrderRequest.interface';
import {ApiService} from "./api.service";
import {FakeOrderResponseInterface} from "../../types/FakeOrderResponse.interface";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private apiService: ApiService) { }

  makeOrder(data: OrderRequestInterface): Observable<FakeOrderResponseInterface> {
    return this.apiService.makeOrderRequest(data);
  }
}
