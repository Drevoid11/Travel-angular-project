import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule, RouterModule.forRoot([
    {path: '', component : HomeComponent},
    {path: 'home', component : HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
  ])  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, ContactComponent, ImageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
