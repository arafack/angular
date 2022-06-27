import { song } from './../../song';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {FirestoreService  } from '../../services/data/firestore.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetailPage implements OnInit {
    song: any={};
    songId: any;

  constructor(public fs: FirestoreService,
    public r: Router,
    public ac: AlertController,
    public ar: ActivatedRoute) { }

  ngOnInit() {
    this.songId= this.ar.snapshot.paramMap.get('id');
    console.log('El id es', this.songId);
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const des_subscribir= this.fs.getSongtDetail('songList',this.songId).subscribe( result => {
      this.song=result;
      des_subscribir.unsubscribe();

      });
  }
async deleteSong(){
  const alert= await this.ac.create({message: 'Estas seguro que quieres eliminar la canción',buttons: [
    { text: 'Cancel', role: 'cancel', handler: blah=>{

      console.log('Comfirm Cancel:  blah');
    },
    },
    {
      text: 'Okay', handler: ()=>{
      this.fs.deleteSong(this.songId).then(()=>{
      this.r.navigateByUrl('');
      });

      },
    },],
  });
  await alert.present();
  }

   }
