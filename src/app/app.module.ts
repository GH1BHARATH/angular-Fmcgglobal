import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { topBarComponent } from './top-bar/top-bar.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  imports:      [
     BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
    RouterModule.forRoot([
      {path:'', component:ProductListComponent},
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component:  CartComponent  },
      { path: 'shipping', component: ShippingComponent},
    ]) 
  ],
  declarations: [ 
     AppComponent,
     HelloComponent,
     ProductListComponent,
     topBarComponent,
     ProductAlertComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
