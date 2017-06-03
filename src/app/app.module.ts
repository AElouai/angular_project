import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RatingStarComponent } from './all/rating-star/rating-star.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductComponent } from './products/product/product.component';

import { DbServiceService } from './all/db-service.service';
import { ProductResolveService } from './products/product/product-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    TopNavComponent,
    RatingStarComponent,
    WelcomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DbServiceService , ProductResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
