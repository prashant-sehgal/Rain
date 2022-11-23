import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsHomeComponent } from './Components/products-home/products-home.component';
import { ProductPreviewComponent } from './Components/product-preview/product-preview.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  { path: '', component: ProductsHomeComponent },
  { path: 'products/:slug', component: ProductPreviewComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
