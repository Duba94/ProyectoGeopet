import { Component } from '@angular/core';
import { Platform } from "ionic-angular";
import { NavController, LoadingController, AlertController} from 'ionic-angular';
import { Facebook } from "@ionic-native/facebook";
import { RegistroPage } from '../registro/registro';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../providers/auth-service';
import { UserModel } from '../../models/user-model';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  scopes: string[];
  isLoggedIn: boolean;
  user: any;
  userModel: UserModel;

  constructor(private facebook: Facebook,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public authService: AuthService,
              public platform: Platform,
              public navCtrl: NavController) {
    this.userModel = new UserModel();
    this.scopes = ['public_profile', 'user_friends', 'email'];
    this.isLoggedIn = false;

    platform.ready().then((readySource) => {
      console.log("Platform ready from", readySource);
      // More info on login status at: https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
      facebook.getLoginStatus()
        .then(response => {
          console.log("Status: ", response.status);
          if(response.status === "connect") {
            console.log("User logged in and has authenticated the app: ", response);
            this.isLoggedIn = true;
          } else {
            console.log("User logged in to Facebook but has not authenticated the app OR user isn't logged into Facebook", response);
            this.isLoggedIn = false;
          }
        })
        .catch((error) => console.log(error));
    });
  }

  public loginWithFacebook(){
    this.facebook.login(this.scopes)
      .then(response => {
        if(response.status === "connected") {
          console.log("Logged in succesfully");
          this.getUserDetail(response.authResponse.userID);
          this.isLoggedIn = true;
        } else {
          console.log("Not logged in :(");
          this.isLoggedIn = false;
        }
      })
      .catch((error) => console.log('Error logging into Facebook', error));
  }
  signInWithFacebook() {
        if (this.platform.is('cordova')) {
            return this.facebook.login(['email']).then(result => {
                this.authService.signInWithFacebook(result.authResponse.accessToken).then(result => {
                    this.navCtrl.setRoot(TabsPage);
                });
            });
        } else {
            return this.authService.signInWithPopup().then(result => {
                this.navCtrl.setRoot(TabsPage);
            });
        }
    }
  public logoutFromFacebook(){
    this.facebook.logout()
      .then( (response) => {
        console.log("Logged out: ", response);
        this.isLoggedIn = false
      })
      .catch((error) => {
      console.log('Error logout from Facebook', error)}
      );
  }

  getUserDetail(userId) {
    this.facebook.api("/" + userId +"/?fields=id,email,name,picture,gender",["public_profile"])
      .then((detail) => {
        console.log("User detail: ", detail);
        this.user = detail;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  signIn() {
      let loading = this.loadingCtrl.create({
          content: 'Iniciando sesión. Por favor, espere...'
      });
      loading.present();

      this.authService.signInWithEmailAndPassword(this.userModel.email,this.userModel.password).then(result => {
          loading.dismiss();

          this.navCtrl.setRoot(TabsPage);
      }).catch(error => {
          loading.dismiss();

          console.log(error);
          this.alert('Error', 'login or pasword incorrectos');
          this.userModel.password="";

      });
  }

  alert(title: string, message: string) {
      let alert = this.alertCtrl.create({
          title: title,
          subTitle: message,
          buttons: ['OK']
      });
      alert.present();
  }

    goRegistro() {
        this.navCtrl.push(RegistroPage);
    }
}
