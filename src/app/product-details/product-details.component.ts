import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsFromFile } from '../productsFile';
import { CartService } from '../cart.Service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('product_id'));
    this.product = productsFromFile.find(
      (product) => product.product_id === productIdFromRoute
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Product added to cart!');
  }
}
