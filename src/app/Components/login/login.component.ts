import { Component, OnInit } from '@angular/core';
import * as api from '../../Api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  darkMode = JSON.parse(`${localStorage.getItem('darkMode')}`);

  formData = {
    email: '',
    password: '',
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.checkDarkMode();
  }

  async loginHandler() {
    try {
      const response: any = await this.http
        .post(api.login, this.formData)
        .toPromise();

      document.cookie = `jwt=${response.auth.token}; expires=${new Date(
        response.auth.expiresIn
      )}`;

      alert('You are logged in successfully');
      window.location.href = '/';
    } catch (err: any) {
      console.log(err.error.message);
    }
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
