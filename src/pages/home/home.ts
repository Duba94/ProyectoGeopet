import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service';
import { CreateEventoPage } from '../create-evento/create-evento';
import { DetalleEventoPage } from '../detalle-evento/detalle-evento';
import { UpdateEventoPage } from '../update-evento/update-evento';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[EventoServiceProvider]
})

export class HomePage {

 messages: any;
 model: any = {};
 idUsuario: any;

 constructor(
   public navCtrl: NavController,
   public servicio: EventoServiceProvider,
   public authService: AuthService) {
   this.ionViewDidLoad();
   this.loadData();
 }
 ionViewDidLoad() {
   console.log('ionViewDidLoad CreateMascotaPage');
  this.idUsuario = this.authService.getidUsuario();
 }
    loadData(){
     this.servicio.getAllDocuments("eventos",this.idUsuario).then((e)=>{
       this.messages = e;
   });
   }
   goCreate():void{
     this.navCtrl.push(CreateEventoPage);
   }
   goedit(obj):void{
     this.model = obj;
     this.navCtrl.push(UpdateEventoPage,{
       //title: this.model.title,
       //text: this.model.text
        data:this.model
     });
   }
   godetail(obj):void{
      this.model = obj;
     this.navCtrl.push(DetalleEventoPage,{
       data:this.model
     });
   }

  deleteMessage(key){
     this.servicio.deleteDocument("eventos",key).then(()=>{
     this.loadData();//refresh view
   });
  }
  signOut() {
   this.authService.signOut();
   this.navCtrl.setRoot(LoginPage);
  }


}
