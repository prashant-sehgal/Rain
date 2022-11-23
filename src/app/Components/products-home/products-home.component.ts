import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as api from 'src/app/Api';

export interface Product {
  id: string;
  description: string;
  discount: {
    expiresOn: string;
    price: number;
  };
  images: string[];
  likes: number;
  name: string;
  price: number;
  ratingsAverage: number;
  recommended: boolean;
  slug: string;
}

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css'],
})
export class ProductsHomeComponent implements OnInit {
  products: Product[] = [];
  constructor(private http: HttpClient) {}
  apiHost = api.host;

  darkMode = JSON.parse(`${localStorage.getItem('darkMode')}`);

  async ngOnInit(): Promise<void> {
    const response: any = await this.http.get(api.getAllProducts).toPromise();

    if (response || response.status === 'success')
      this.products = response.data.documents;

    this.checkDarkMode();
  }

  limitString(string: string) {
    const words = string.split(' ');
    let newString = '';
    let i = 0;
    while (newString.length <= 104 && `${newString} ${words[i]}`.length < 60) {
      newString = `${newString} ${words[i]}`;
      i += 1;
    }

    return `${newString}...`;
  }

  checkDarkMode() {
    setInterval(() => {
      const darkMode = JSON.parse(`${localStorage.getItem('darkMode')}`);
      if (darkMode !== this.darkMode) {
        this.darkMode = darkMode;
      }
    }, 1);
  }
}
