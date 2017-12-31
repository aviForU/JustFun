import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MaterialModule} from './material.module';
import {HttpModule,JsonpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule,Router} from '@angular/router';
import { AppComponent } from './app.component';
import { WishingComponent } from './wishing/wishing.component';
import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    WishingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    RouterModule,
    JsonpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports : [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    RouterModule,
    JsonpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
