import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent {
// @Input() name:string="";
name:string="";
price:number=0;
rating:string="";
image:string="";
constructor(private productService:ProductService){
  productService.currentName.subscribe(
    name=>{
      this.name=name;
    })
    productService.currentPrice.subscribe(
      price=>{
        this.price=price;
      })
    productService.currentRating.subscribe(
      rating=>{
        this.rating=rating;
      })
    productService.currentImage.subscribe(
      image=>{
        this.image=image
      })
}
create(){
  this.productService.addProduct({
    name:this.name,
    price:this.price,
    rating:this.rating,
    image:this.image,
  });
   // Reset product details after creating the product
   this.name = '';
   this.price = 0;
   this.rating = '';
   this.image = '';
  }
}

