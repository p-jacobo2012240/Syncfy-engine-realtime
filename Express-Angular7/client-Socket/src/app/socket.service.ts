import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url = 'http://localhost:1234'; //URL EN LA QUE ESCUCHA EL SOCKET
  private socket;

  //private usersURL = 'http://localhost:1234/api';

  constructor(private http: HttpClient ) { 
    this.socket = io(this.url);    
  }
  
  public sendMessage(message) {
    this.socket.emit('new-locations', message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('new-locations', (message) => {
            observer.next(message);
        });
    });
  }

  /* public getUsers() {
    return this.http.get(`${this.usersURL}`)
  } */

 

}
