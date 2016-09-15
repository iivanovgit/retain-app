import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { FirebaseModule } from './firebase';
import { Store } from './store';
import * as containers from './containers';
import * as ui from './ui';
import * as directives from './directives';
import * as services from './services';



const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);




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
    HttpModule,
    FormsModule,
    FirebaseModule,
    routes
  ],
  providers: [...mapValuesToArray(services), Store],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
