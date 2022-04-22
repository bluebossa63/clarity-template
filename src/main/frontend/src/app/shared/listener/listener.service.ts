import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const EventSource: any = window['EventSource'];

@Injectable({
  providedIn: 'root'
})

export class ListenerService {
    
    allEvents: Array<any> = [];
    events: Observable<any>
    
    constructor(private http: HttpClient) {}
    
    getEvents(): Observable<any> {
        return this.http.get('/apis/kpack.io/v1alpha2/builds/?watch=true');
      }
    
      getAllEvents(): Array<any> {
          return this.allEvents;   
      }
    
}