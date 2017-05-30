import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RatingStarComponent } from './all/rating-star/rating-star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    TopNavComponent,
    RatingStarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
