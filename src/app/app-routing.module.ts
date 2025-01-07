import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping.component';
import { CreateProductComponent } from './shopping/components/create-product/create-product.component';
import { OperationsComponent } from './shopping/components/operations/operations.component';
import { AllProductsComponent } from './shopping/components/all-products/all-products.component';
import { ViewProductComponent } from './shopping/components/view-product/view-product.component';
import { RatingComponent } from './shopping/components/rating/rating.component';

const routes: Routes = [
  {path:'shopping',component:ShoppingComponent},
  {path:'create',component:CreateProductComponent},
  {path:'operations',component:OperationsComponent},
  {path:'allproducts',component:AllProductsComponent},
  {path:'view',component:ViewProductComponent},
  {path:'rating',component:RatingComponent},
  {path:'',component:ShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
