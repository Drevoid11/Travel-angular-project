import { Component, OnInit, Input } from '@angular/core';
import { Image } from './image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent{
   @Input() image: Image;
}