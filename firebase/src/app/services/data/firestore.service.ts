import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { song } from '../../song';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( public firestore: AngularFirestore) { }


  createSong(albumName: string, artistName: string, songDescription: string,songName: string): Promise<void>
  { const id= this.firestore.createId();
    return this.firestore.doc(`songList/${id}`).set({id,albumName,artistName,songDescription,songName});
  }


  getcancionlist(): AngularFirestoreCollection<song>{
   return this.firestore.collection('songList');
  }

  getSongtDetail(path: string, songId: string){
    const value=this.firestore.collection(path);
    return value.doc(songId).valueChanges();
   }
   deleteSong(songId: string): Promise<void>{
    return this.firestore.doc(`songList/${songId}`).delete();
}

}
