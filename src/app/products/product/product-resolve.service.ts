import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Resolve } from '@angular/router';
import { DbServiceService } from '../../all/db-service.service';
import { ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductResolveService implements Resolve<Product> {

  constructor(private _DbServiceService: DbServiceService) { }

  resolve(route: ActivatedRouteSnapshot , state: RouterStateSnapshot){
    let id = +route.params['id'];
    return this._DbServiceService.getProduct(id)
      .map(product => product );
  }
}
