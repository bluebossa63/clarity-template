import { Component, OnInit } from '@angular/core';
import { ListenerService } from '../shared/listener/listener.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: Array<any> = [];

  constructor(private listener: ListenerService) { }

  ngOnInit() {
      this.listener.getEvents().subscribe(data => {
          this.events.unshift(data);
      });
  }

}