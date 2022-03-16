import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SunbirdHtmlH5pPlayerModule } from 'projects/sunbird-html-h5p-player/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SunbirdHtmlH5pPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
