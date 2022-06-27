import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
   registerForm: FormGroup;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(private fb: FormBuilder, private as: AuthService, private r: Router, private AC: AlertController )
   {
    this.builderForm();

   }


  ngOnInit() {  }


 async register(event: Event): Promise<void>{
   event.preventDefault();

   if (this.registerForm.valid) {

    const value= this.registerForm.value;
    this.as.singupuser(value.email, value.password).then(()=> { this.r.navigateByUrl('login');
  }, async error=>{

    const alert= await this.AC.create({message: error.message, buttons:[{text: 'Ok', role: 'cancel'}],
     });
    await alert.present();

     });
   }

  return;
 }




  private builderForm(){
    this.registerForm= this.fb.group({
    email:['', [Validators.required,Validators.email]],
    password:['', [Validators.required, Validators.minLength]]   });
   }

   // eslint-disable-next-line @typescript-eslint/member-ordering
   get emailField() { return this.registerForm.get('email');}
   // eslint-disable-next-line @typescript-eslint/member-ordering
   get passField() { return this.registerForm.get('password');}

}
