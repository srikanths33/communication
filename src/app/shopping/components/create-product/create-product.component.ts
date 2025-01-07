import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
public productform:FormGroup=new FormGroup({
  name:new FormControl(),
  price:new FormControl(),
  rating:new FormControl(),
  image:new FormControl()
})
// @Output() productCreated = new EventEmitter<any>();
constructor(private productService:ProductService){
  this.productform.valueChanges.subscribe(
    value=>{
      productService.changeName(value.name);
      productService.changePrice(value.price);
      productService.changeRating(value.rating);
      productService.changeImage(value.image);
    }
  )
 
}
// Handle image selection and convert it to base64 string or URL
// onFileSelected(event: any): void {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.readAsDataURL(file); // Convert image to base64 string
//     reader.onload = () => {
//       // Set the image value in the form
//       this.productform.patchValue({
//         image: reader.result
//       });
//     };
//   }
// }

add(){
  const product=this.productform.value;
  console.log('product Data:',this.productform.value);
  this.productService.addProduct(product);
  this.productform.reset();

  // location.reload();
  
  // this.productCreated.emit(product);
}
onFileSelected(event: any): void { 
  const file = event.target.files[0]; 
  if (file) { 
    const reader = new FileReader(); 
    reader.onloadend = () => { 
      const imageUrl = reader.result as string; 
      console.log('Base64 Image URL:', imageUrl); // Debugging 
      this.productform.patchValue({ image: imageUrl }); 
      console.log('Updated Form Value:', this.productform.value); // Debugging 
      }; 
      reader.readAsDataURL(file); } }




// public Name:string="";



// click(){
//   console.log(this.productform.value);
// }

}

