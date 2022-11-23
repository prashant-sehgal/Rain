import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsHomeComponent } from './Components/products-home/products-home.component';
import { ProductPreviewComponent } from './Components/product-preview/product-preview.component';
import { ImageCarouselComponent } from './Components/image-carousel/image-carousel.component';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsHomeComponent,
    ProductPreviewComponent,
    ImageCarouselComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
