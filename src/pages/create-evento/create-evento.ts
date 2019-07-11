import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { EventoServiceProvider} from '../../providers/evento-service/evento-service';
import { HomePage } from '../home/home';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-create-evento',
  templateUrl: 'create-evento.html',
})
export class CreateEventoPage {
  messages: any;
  model: any = {};
  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public servicio: EventoServiceProvider
  ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateMascotaPage');
    this.model.idUsuario=this.authService.getidUsuario();
  }
  addMessage(){
      this.servicio.addDocument("eventos",this.model).then(()=>{
      this.navCtrl.push(HomePage);
     });
  }

}
