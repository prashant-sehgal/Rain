import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Rain';
  darkMode: boolean = false;

  constructor() {}

  ngOnInit() {
    this.getDarkMode();
  }

  getDarkMode() {
    const darkMode = JSON.parse(`${localStorage.getItem('darkMode')}`);
    if (darkMode && darkMode === true) this.darkMode = true;
  }

  toggleDarkMode(event: boolean) {
    this.darkMode = event;
    localStorage.setItem('darkMode', JSON.stringify(event));
  }
}
