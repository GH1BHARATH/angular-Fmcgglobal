import { Component, OnInit } from '@angular/core';
import { productsFromFile } from '../productsFile';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = productsFromFile;
  share() {
    window.alert('The product has been shared!');
  }
  
  onNotify(){
    alert('You will be notified when the product goes on sale');
  }
}
