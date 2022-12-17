import {Injectable} from '@angular/core';
import {debounceTime, Observable, of} from "rxjs";
import {ProductCardInterface} from "../../types/ProductCard.interface";
import {productsData} from "../../productsData";

@Injectable()
export class ApiService {

  // Fake response
  getProductsFromApi(): Observable<ProductCardInterface[]> {
    return of(productsData).pipe(debounceTime(2000));
  }
}
