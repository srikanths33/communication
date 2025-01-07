import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CreateProductComponent } from './shopping/components/create-product/create-product.component';
import { OperationsComponent } from './shopping/components/operations/operations.component';
import { AllProductsComponent } from './shopping/components/all-products/all-products.component';
import { ViewProductComponent } from './shopping/components/view-product/view-product.component';
import { RatingComponent } from './shopping/components/rating/rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    CreateProductComponent,
    OperationsComponent,
    AllProductsComponent,
    ViewProductComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
