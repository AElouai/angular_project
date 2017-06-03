import { Component, OnInit , Input } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { Product } from '../product';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
  // ,providers: [DbServiceService]
})

export class ProductComponent implements OnInit {

  // @Input() product: Product;

  @Input() product: Product;

  private id: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.route.data.subscribe((data: { product: Product }) => {
      this.product = data.product;
      console.log('NGinit : ' , this.product);
    });
  }


  onRatingClicked(rating: number , index: number ): void {
    console.log('I am here :', rating , index);
    this.product.rating = rating;
  }



  /**
   * If Working with local data
   */
  /*
  ngOnInit() {
    if ( !this.product ) {
      this.route
        .params
        .map(params => params['id'])
        .do(id => this.id = +id)
        .subscribe( id => this.getProduct(id));
    }
  }

  getProduct(id): void {
    this._DbServiceService.getProduct(id)
      .subscribe(function(product) {
        this.product = product;
        this.product = this.product.json();
        console.log('product : ', this.product );
        console.log('product rating : ', this.product.rating );

      });
  }
*/

}
