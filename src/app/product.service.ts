import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // productcreated = new EventEmitter<any>();
  private products=new BehaviorSubject<any[]>([]);
  productCreated =this.products.asObservable();

  private product=new BehaviorSubject<any>({});
  viewProductDetails=this.product.asObservable();

 

  private nameSource =new BehaviorSubject<string>('');
  currentName = this.nameSource.asObservable();

  private priceSource=new BehaviorSubject<any>('');
  currentPrice=this.priceSource.asObservable();

  private ratingSource=new BehaviorSubject<any>('');
  currentRating=this.ratingSource.asObservable();

  private imageSource=new BehaviorSubject<string>('');
  currentImage=this.imageSource.asObservable();

  addProduct(product: any) {
    // console.log('Adding product:',product);
    // this.productcreated.emit(product); 
    this.products.next([...this.products.value,product])
  }
  
  viewProduct(product:any){
    this.product.next(product);
  }
  
  changeName(name:string){
  this.nameSource.next(name);
  }
  changePrice(price:number){
    this.priceSource.next(price);
  }
  changeRating(rating:number){
    this.ratingSource.next(rating);
  }
  changeImage(image:string){
   this.imageSource.next(image);
  }
}

