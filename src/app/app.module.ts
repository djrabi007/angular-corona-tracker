import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoronaComponent } from './corona/corona.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CoronaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Added
    HttpClientModule//Added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
