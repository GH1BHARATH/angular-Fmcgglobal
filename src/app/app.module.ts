import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { topBarComponent } from './top-bar/top-bar.component';

@NgModule({
  
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot([
      {path:'', component:ProductListComponent}
    ]) 
  ],
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ,ProductListComponent,topBarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
