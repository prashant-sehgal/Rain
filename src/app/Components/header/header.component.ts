import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() darkMode = false;
  @Output() toggleDarkMode: EventEmitter<boolean> = new EventEmitter();

  navColorClass = 'bg-light';

  constructor() {}

  toggleDarkModeHandler() {
    this.toggleDarkMode.emit(this.darkMode ? false : true);
    this.navColorClass = this.darkMode ? 'bg-light' : 'bg-dark navbar-dark';
  }

  ngOnInit(): void {}
}
