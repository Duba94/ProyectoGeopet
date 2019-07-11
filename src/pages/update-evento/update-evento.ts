import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-update-evento',
  templateUrl: 'update-evento.html',
  providers:[EventoServiceProvider]
})
export class UpdateEventoPage {

  model: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public servicio: EventoServiceProvider) {

    this.model=this.navParams.get("data");
  }

  updateMessage(obj){
    this.servicio.updateDocument("eventos",this.model.$key, this.model).then(()=>{
    this.navCtrl.push(HomePage);
   });
  }
}
