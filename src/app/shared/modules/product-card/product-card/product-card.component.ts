import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductCardInterface} from "../../../../types/ProductCard.interface";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: ProductCardInterface
  @Output() openPhoto = new EventEmitter();

}
