import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment'

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

 
const config: SocketIoConfig = { 
  url: environment.SOKET_SERVER_URL,
   options: {}
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
