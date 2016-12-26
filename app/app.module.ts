import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProfileComponent } from './components/profile.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule, HttpModule, JsonpModule],
  declarations: [ AppComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
