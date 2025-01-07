import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
@Input() rating1:number=0;
// stars:number[]=[1,2,3,4,5];

// getStars(rating1: number): number[] {
//   return new Array(rating1); // Creates an array with 'rating' number of elements
// }
}
