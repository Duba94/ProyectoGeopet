import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-detalle-evento',
  templateUrl: 'detalle-evento.html',
})

export class DetalleEventoPage {
 model: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.model=this.navParams.get("data");

  }
  gohome(){
      this.navCtrl.push(HomePage);
  }
}
