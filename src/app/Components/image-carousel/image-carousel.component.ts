import { Component, OnInit, Input } from '@angular/core';
import * as api from '../../Api';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
})
export class ImageCarouselComponent implements OnInit {
  @Input() images: string[] = [];
  apiHost = api.host;

  constructor() {}

  ngOnInit(): void {}
}
