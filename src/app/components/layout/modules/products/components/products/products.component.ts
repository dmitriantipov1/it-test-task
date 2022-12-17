import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
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
  public url: string | null = null;
  @ViewChild('sectionContainer') sectionContainer: ElementRef;

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    setTimeout(() => {
      this.products$ = this.productService.getProducts();
    }, 1500);
  }

  openPhoto(photoUrl: string): void {
    this.url = photoUrl;
  }

  @HostListener('document: click', ['$event'])
  clickOut(event: Event): void {
    if (!this.sectionContainer.nativeElement.contains(event.target)) {
      this.url = null;
    }
  }
}
