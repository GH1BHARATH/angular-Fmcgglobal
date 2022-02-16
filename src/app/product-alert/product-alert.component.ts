import {Component, EventEmitter, Input, Output } from 
'@angular/core';

import { Product } from '../productsFile';
@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent{
@Input () productFile : Product | undefined;
@Output() notify = new EventEmitter();

buy() {
  window.alert('The product has been added to cart.!');
}
}