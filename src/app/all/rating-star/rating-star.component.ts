import { Component, OnInit , OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent implements OnInit , OnChanges {

  rating: number;
  width: number;
  title: String;

  constructor() {
    this.rating = 4;
  }

  ngOnChanges(): void {
    this.width = this.rating * 50 / 5;
  }

  ngOnInit() {
  }

}
