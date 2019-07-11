import { Component } from '@angular/core';
import { NavController,LoadingController, AlertController} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { UserModel } from '../../models/user-model';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  user: UserModel;

  constructor(
      public navCtrl: NavController,
      public loadingCtrl: LoadingController,
      public alertCtrl: AlertController,
      public authService: AuthService
      ){
          this.user = new UserModel();
      }

  signUp() {
            let loading = this.loadingCtrl.create({
                content: 'Creando cuenta. Por favor, espere...'
            });
            loading.present();
          this.authService.registerUser(this.user.email,this.user.password)
          .then(result => {
              loading.dismiss();
              this.alert('notificacion', 'registro exitoso.');
              this.navCtrl.push(LoginPage);
          })
          .catch(err=>{
            loading.dismiss();
            console.log("error");
            this.alert('Error', 'Ha ocurrido un error inesperado. Por favor intente nuevamente.');
          })

      }
      alert(title: string, message: string) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }


}
