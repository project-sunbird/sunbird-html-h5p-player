import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SunbirdHtmlPlayerModule } from 'projects/sunbird-html-player/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SunbirdHtmlPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
