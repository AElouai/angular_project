import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  productName: String;

  constructor() {
    this.productName = 'MAC';
  }

  ngOnInit() {
  }

}
