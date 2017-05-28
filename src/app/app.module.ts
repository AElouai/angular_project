import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { RedColorPipe } from './red-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ProductItemComponent,
    RedColorPipe
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
