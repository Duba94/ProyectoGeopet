import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MostrarMapsPage} from '../mostrar-maps/mostrar-maps';
import { ConfigMapsPage} from '../config-maps/config-maps';


@Component({
  selector: 'page-detalle-mascota',
  templateUrl: 'detalle-mascota.html',
})
export class DetalleMascotaPage {
   model: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.model=this.navParams.get("data");
  }
  localizar(){
   this.navCtrl.push(MostrarMapsPage);
  }

  configurar(){
      this.navCtrl.push(ConfigMapsPage);
  }
}
