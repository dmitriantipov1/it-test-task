import {Injectable} from '@angular/core';
import {debounce, debounceTime, Observable} from "rxjs";
import {ProductCardInterface} from "../../types/ProductCard.interface";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) {}

  getProducts(): Observable<ProductCardInterface[]> {
    return this.apiService.getProductsFromApi();
  }
}
