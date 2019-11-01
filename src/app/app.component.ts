import { Component } from '@angular/core';
import { Image } from './image/image'; 
import db from '../assets/data/db.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  imagesList: Image[] = db.images;
 }
