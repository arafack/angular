


import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
// eslint-disable-next-line max-len
//import {AngularFirestore,AngularFirestoreDocument,DocumentReference, AngularFirestoreCollection, CollectionReference } from "@angular/fire/compat/firestore";
import * as firebase from 'firebase/compat';
//import  * as firebase from "@angular/fire/app";
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public listaRefEvento: any;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor( public event_list_ref: AngularFirestore, public as: AuthService) {

  }

  async createEvent(eventName: string, eventDate: string, eventPrice: number, eventCost: number): Promise<DocumentReference>{
     const user: any = await this.as.getUser();
     const id = this.event_list_ref.createId();
     this.listaRefEvento= this.event_list_ref.collection(`perfilUsuario/${user.uid}/listaEvento`)
     .doc(`${id}`);
     return  this.listaRefEvento.set({
      id,
      name: eventName,
      date: eventDate,
      price: eventPrice * 1,
      cost: eventCost * 1,
      revenue: eventCost * -1,
    });
   }

   async getEventList()
    //:Promise<firebase.firestore.QuerySnapshot>
   {
    const user: any= await this.as.getUser();
    this.listaRefEvento= this.event_list_ref.collection(`perfilUsuario/${user.uid}/listaEvento`);
    return this.listaRefEvento.valueChanges();
    }
    async getEventDetail(eventId: string)
    //:Promise<firebase.firestore.DocumentSnapshot>
    {
      const user: any = await this.as.getUser();
      this.listaRefEvento=  this.event_list_ref.collection(`perfilUsuario/${user.uid}/listaEvento`);
      return this.listaRefEvento.doc(eventId).valueChanges();
     }


}
