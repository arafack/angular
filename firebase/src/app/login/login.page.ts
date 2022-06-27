import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(private fb: FormBuilder, private as: AuthService, private r: Router, private AC: AlertController ) {
    this.builderForm();
   }

  ngOnInit() {
  }

   async login(event: Event): Promise<void> {
     event.preventDefault();
     if (this.loginForm.valid)
      {
        const value = this.loginForm.value;
        this.as.loginuser(value.email, value.password).then(()=> {this.r.navigateByUrl('home-event'); }, async error=>{
        const alert= await this.AC.create({ message: error.message, buttons:[ {text:'Ok', role: 'cancel'}],
         });

         await alert.present();
        });

      }
    return;

   }

  private builderForm(){
   this.loginForm= this.fb.group({
   email:['', [Validators.required,Validators.email]],
   password:['', [Validators.required, Validators.minLength]]   });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get emailField() { return this.loginForm.get('email');}
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get passField() { return this.loginForm.get('password');}

}
