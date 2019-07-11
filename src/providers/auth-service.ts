import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {
   user: firebase.User;

    constructor(public afAuth: AngularFireAuth) {
      afAuth.authState.subscribe((user: firebase.User) => {
      this.user = user;
      });
    }
    registerUser(email:string, password:string){
     return this.afAuth.auth.createUserWithEmailAndPassword( email, password)
     .then((res)=>{
           // El usuario se ha creado correctamente.
      })
     .catch(err=>Promise.reject(err))
   }

   signInWithEmailAndPassword(email:string, password:string){
       return this.afAuth.auth.signInWithEmailAndPassword(email,password)
       .then((res)=>{

        })
       .catch(err=>Promise.reject(err))
   }
   signOut(): Promise<any> {
        return this.afAuth.auth.signOut();

    }
    signInWithFacebook(accessToken: string): Promise<any> {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(accessToken);
        return this.afAuth.auth.signInWithCredential(facebookCredential);
    }

    signInWithPopup(): Promise<any> {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

    resetPassword(email: string): Promise<any> {
      return this.afAuth.auth.sendPasswordResetEmail(email)
        .then(() => console.log("email sent"))
        .catch((error) => console.log(error))
    }

    get authenticated(): boolean {
         return this.user != null;
     }

     getidUsuario(){
       return this.user.uid;
     }
     getNameUsuario(){
       return this.user.email;
     }

}
