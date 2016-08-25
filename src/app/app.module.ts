import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import * as containers from './containers';
import * as ui from './ui';
import * as directives from './directives';
import * as services from './services';

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

const firebaseConfig = {
  apiKey: 'AIzaSyCaWUokAXGAu4ehY9AH1OheIcQjgSZppN8',
  authDomain: 'nat-geo-wild.firebaseapp.com',
  databaseURL: 'https://nat-geo-wild.firebaseio.com',
  storageBucket: 'nat-geo-wild.appspot.com',
};


@NgModule({
  declarations: [
    AppComponent,
    ...mapValuesToArray(containers),
    ...mapValuesToArray(ui),
    ...mapValuesToArray(directives)
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [...mapValuesToArray(services)],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
