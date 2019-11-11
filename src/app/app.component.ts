import { Component, OnInit } from '@angular/core';
import { Image } from './image/image'; 
import db from '../assets/data/db.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [  ]
})
export class AppComponent  implements OnInit{
  imagesList: Image[] = db.images;
  constructor() {
    console.log(db);
  }
  ngOnInit() 
  {
    console.log(db);
  }

 }
