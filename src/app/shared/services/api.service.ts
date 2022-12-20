import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {ProductCardInterface} from "../../types/ProductCard.interface";
import {productsData} from "../../productsData";
import {FakeOrderResponseInterface} from "../../types/FakeOrderResponse.interface";
import {OrderRequestInterface} from "../../types/OrderRequest.interface";

@Injectable()
export class ApiService {

  // Fake response
  getProductsFromApi(): Observable<ProductCardInterface[]> {
      return of(productsData);
  }

  // Fake order request
  makeOrderRequest(data: OrderRequestInterface): Observable<FakeOrderResponseInterface> {
    return of({
      status: 200,
      errors: null,
      success: 'Спасибо за заказ',
      data,
    })
  }
}
