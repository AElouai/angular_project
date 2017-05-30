import {Component, OnInit, OnChanges, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent implements OnInit , OnChanges {

  @Input() rating: number;
  width: number;
  stars = [ 1, 2 , 3 , 4 , 5 ];
  preview = -1;

  @Output() rate: EventEmitter<number> =  new EventEmitter<number>();

  onClick(rateStatus: number): void {
    this.rate.emit(rateStatus);
  }

  styles( index ) {
    return {
      'glyphicon': true,
      'glyphicon-star': index < this.rating,
      'glyphicon-star-empty': index >= this.rating
    };
  };

  ngOnInit() {}

  ngOnChanges(): void {
    // Convert x out of 5 starts
    // to y out of 86px width
    this.width = this.rating * 100 / 5;
  }
}
