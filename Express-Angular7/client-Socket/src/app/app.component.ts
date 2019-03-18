import { Component } from '@angular/core';
import { SocketService } from './socket.service';

//Configuracion separada
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socket-client';
  message: string;
  messages : string[] = []

  //separado del resto SOKETS
  socketHost: any;
  zone:any;
  socket:any;

  //datos del API
  users : any[] = []

  constructor(private _skServie : SocketService ){

      //Dafulat init  --sin socket
      this.getUsers();

      this.socketHost = "http://localhost:1234";
      this.socket = io(this.socketHost);

      this.socket.on('realtime', (data)=>{
          this.getUsers();
      })



      
  }

  sendMessage() {
    this._skServie.sendMessage(this.message);
    this.message = '';
  }

  getUsers(){
    this._skServie.getUsers().subscribe( (data: any )=>{

      this.users = data
      console.log(data)
    })
  }

  ngOnInit() {
    this._skServie
    .getMessages()
    .subscribe((message: string) => {
      this.messages.push(message);
    });
  }


}
