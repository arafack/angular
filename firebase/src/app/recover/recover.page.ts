
import { async } from '@firebase/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
  recoverForm: FormGroup;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(private fb: FormBuilder, private as: AuthService, private r: Router, private AC: AlertController) {
    this.builderForm();
   }

  ngOnInit() {
  }

  async recuperar(event: Event) {
//    event.preventDefault();
    if (this.recoverForm.valid) {
       const value= this.recoverForm.value;
      this.as.r_password(value.email).then( async ()=> {

      const alert= await this.AC.create({
        message: 'Revisa tu correo, que te enviamos un link para cambiar tu contraseña.' ,
        buttons: [{text: 'Ok', role: 'cancel', handler:()=>{
          this.r.navigateByUrl('login');
      },},],  });
     await alert.present(); },

     async error=>{
     const erroralert= await this.AC.create({
       message: error.message,
       buttons:[{text: 'Ok', role: 'cancel'}],
      });
     await erroralert.present();
       }   );
      } else{

        console.log('no entro');

      }
   }

  private builderForm(){
    this.recoverForm= this.fb.group({
    email:['', [Validators.required,Validators.email]],
    password:['', [Validators.required, Validators.minLength]]   });
   }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get emailField() { return this.recoverForm.get('email');}

}
