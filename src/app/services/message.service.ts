import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageSubject = new Subject<any>();

  constructor() { }

  sendMessage(msg: string) {
    this.messageSubject.next(msg);
  }

  clearMessage() {
    this.messageSubject.next();
  }

  receiveMessage(): Observable<any> {
    return this.messageSubject.asObservable();
  }

}
