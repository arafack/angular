import { Component } from '@angular/core';
import { FirestoreService } from '../services/data/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  songList: any=[];

  constructor(private fservice: FirestoreService) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {

    this.songList= this.fservice.getcancionlist().valueChanges();

  }

}
