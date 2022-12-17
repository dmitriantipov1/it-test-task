import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../../../../shared/services/products.service";
import {Observable} from "rxjs";
import {ProductCardInterface} from "../../../../../../types/ProductCard.interface";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products$: Observable<ProductCardInterface[]> | null;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
  this.products$ = this.productService.getProducts();
  }

}
