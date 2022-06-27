import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  eventList: any =[];
  constructor(public es: EventService) { }

  ngOnInit() {
    this.es.getEventList().then(observableCollection => {
      const subscription = observableCollection
      .subscribe(collection => {
        console.log(collection);
        this.eventList = collection;
      },
      (error)=> {
        console.log(error);
      });
    });
  }


}
