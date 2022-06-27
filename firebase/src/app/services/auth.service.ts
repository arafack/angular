import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }


   loginUser(email: string, password: string){

    return this.auth.signInWithEmailAndPassword(email,password);

    //return firebase.auth().signInWithEmailAndPassword(email,password);
   }


   // eslint-disable-next-line @typescript-eslint/naming-convention
   signup_User(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email,password);
    }

   // eslint-disable-next-line @typescript-eslint/naming-convention
   r_password(email: string)
   {
      return this.auth.sendPasswordResetEmail(email);
    //return firebase.auth().sendPasswordResetEmail(email);
   }

   logoutUser(){
    this.auth.signOut();
    //return firebase.auth().signOut();
   }

    getUser(){
      return  this.auth.currentUser;
    }

    hasUser(){
      return this.auth.authState;
    }


}
