import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomeMascotaPage } from '../home-mascota/home-mascota';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service';
import { AuthService } from '../../providers/auth-service';


@Component({
  selector: 'page-create-mascota',
  templateUrl: 'create-mascota.html',
})
export class CreateMascotaPage {
   mascotaModel: any={} ;
   localizacionModel: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public authService: AuthService,
              public servicio: EventoServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateMascotaPage');
    this.mascotaModel.idUsuario=this.authService.getidUsuario();
  }
  addMascota(){
      this.servicio.addDocument("mascotas",this.mascotaModel).then(()=>{
      this.navCtrl.push(HomeMascotaPage);
    });
  }
  addLocalizacion(){
      this.localizacionModel.mascota=this.mascotaModel.nombre;
      this.localizacionModel.telefono="null";
      this.localizacionModel.paswword="null";
      this.servicio.addDocument("localizaciones",this.localizacionModel).then(()=>{
      this.navCtrl.push(HomeMascotaPage);
    });
  }

}
