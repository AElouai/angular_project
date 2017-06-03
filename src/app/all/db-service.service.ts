import { Injectable } from '@angular/core';
import { Product } from '../products/product';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class DbServiceService {

  url = 'http://localhost:2018/api2/products';
  urlProduct = 'http://localhost:2018/api2/product/';

  constructor(private _http: Http) { }



  getProducts(): Observable<Product[]> {
    return this._http.get(this.url)
      .map((response: Response) => <Product[]> response.json())
      .catch(this.httpError);
  }


  getProduct(id): Observable<Product> {
    return this._http.get(this.urlProduct + id)
      .map((response: Response) =>  <Product>response.json())
      .catch(this.httpError);
  }


  private httpError(error: Response) {
    console.error('error  :: ', error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
