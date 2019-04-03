import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  status = false

  constructor( private socket: Socket ) { 
    this.chekStatus()
  }

  chekStatus(){

    this.socket.on('connect', ()=>{
      console.log('CONNECTADO')
      this.status = true
    })

    this.socket.on('disconnect', ()=>{
      console.log('estas desconectado')
      this.status = true
    })


  }
}
