import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductComponent } from './products/product/product.component';
import { ProductResolveService } from './products/product/product-resolve.service';

const routers: Routes = [
  { path: '' , pathMatch: 'full' , redirectTo: 'welcome'},
  { path: 'welcome' , component: WelcomeComponent },
  { path: 'products' , component: ProductsListComponent },
  { path: 'product/:id' , component: ProductComponent , resolve : { product : ProductResolveService} },
  { path: '**' , pathMatch: 'full' , redirectTo: 'welcome'},
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
