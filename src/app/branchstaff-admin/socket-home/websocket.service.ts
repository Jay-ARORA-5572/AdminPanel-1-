import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  baseurl:any=environment.baseUrl;
  devkey:any=environment.devkey;

  // readonly uri: string = 'http://localhost:8000'; // Replace with your Socket.io server URL

  socket: Socket | undefined;
  

  constructor(private http:HttpClient) {
    this.connect();  // Automatically connect on service initialization
                      
  }

  // Connect to the WebSocket server
  connect() {
    this.socket = io(this.baseurl);

    // Optional: Handle connection success or failure
    this.socket.on('connect', () => {
      console.log('Socket connected:', this.socket?.id);
    });

    this.socket.on('disconnect', (reason: string) => {
      console.log('Socket disconnected:', reason);
    });
  }

  // Listen to an event from the server
  listen(eventName: string): Observable<any> {
    return new Observable((observer) => {
      if (this.socket) {
        this.socket.on(eventName, (data: any) => {
          observer.next(data);
        });
      }
    });
  }

  // Emit an event to the server
  emit(eventName: string, data: any) {
    if (this.socket) {
      this.socket.emit(eventName, data);
    }
  }

  // Disconnect from the WebSocket server
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      console.log('Socket connection closed');
    }
  }


  livestreamstart(obj: any) {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjM3N2FjNGI2YjNlYTY4NGY4ZTkwYSIsInVzZXJuYW1lIjoicmFodWxzaXdhbjIwMDFAZ21haWwuY29tIiwiaWF0IjoxNzI1MDg3MDI3fQ.xWD45ISGN26X43IQSKq6nuEg-DQGSrHWkkWXiuCA61U"

    const headers = new HttpHeaders({
        'token': token,
        'api-key': this.devkey
    });

    return this.http.post(this.baseurl + 'streaming/start', obj, { headers });
}


}
