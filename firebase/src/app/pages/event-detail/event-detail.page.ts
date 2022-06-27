

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  public currentEvent: any=[];
  public guestName='';
  constructor(public es: EventService, public ar: ActivatedRoute ) { }

  ngOnInit() {
    const eventId: string = this.ar.snapshot.paramMap.get('id');
    this.es.getEventDetail(eventId).then(observableDoc => {
      observableDoc.subscribe( evento => {
        this.currentEvent = evento;
      } );
      // this.currentEvent = eventSnapshot.data();
      // this.currentEvent.id = eventSnapshot.id;
      });
  }

}
