import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit{
  // Property to hold the list of created products
  products: any[] = [];
  name:string="";
  price:number=0;
  rating:number=0;
  image:string="";
  product:any={};

  @Input ()rating1:number=0;
  

 constructor(private productService:ProductService){}
  ngOnInit(): void {
  this.productService.productCreated.subscribe(
    (products)=>{
      this.products=(products);
    }
  )
  }
  view(product:any){
    this.productService.viewProduct(product);
      }
    
}
