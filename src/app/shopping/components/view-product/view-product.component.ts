import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit{
product:any={};
@Input() rating1:number=0;
constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.productService.viewProductDetails.subscribe(
      (product)=>{
        this.product=product
      }
    );
  }

}
