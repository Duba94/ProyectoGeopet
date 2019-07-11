import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service';
import { HomeMascotaPage } from '../home-mascota/home-mascota';


@Component({
  selector: 'page-update-mascota',
  templateUrl: 'update-mascota.html',
})
export class UpdateMascotaPage {
 model: any = {};
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public servicio: EventoServiceProvider) {
       this.model=this.navParams.get("data");
  }

  updateMascota(obj){
    this.servicio.updateDocument("mascotas",this.model.$key, this.model).then(()=>{
    this.navCtrl.push(HomeMascotaPage);
   });
  }
}
