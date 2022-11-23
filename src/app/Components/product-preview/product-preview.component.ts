import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getAllProducts } from 'src/app/Api';
import { Product } from '../products-home/products-home.component';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css'],
})
export class ProductPreviewComponent implements OnInit {
  // product with initial placeholder values
  product: Product = {
    id: '',
    name: '',
    description: '',
    images: [],
    likes: -1,
    discount: {
      expiresOn: '',
      price: -1,
    },
    price: -1,
    ratingsAverage: -1,
    recommended: false,
    slug: '',
  };

  allowDiscount = false;

  constructor(private http: HttpClient) {}

  numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  async ngOnInit(): Promise<void> {
    const slug = document.URL.split('/')[document.URL.split('/').length - 1];
    const response: any = await this.http
      .get(`${getAllProducts}?slug=${slug}`)
      .toPromise();

    if (response && response.status === 'success' && response.length === 1)
      this.product = response.data.documents[0];

    if (this.product.discount) {
      const expiresOn = new Date(this.product.discount.expiresOn).getTime();
      const now = Date.now();

      if (expiresOn > now) this.allowDiscount = true;
    }
  }
}
