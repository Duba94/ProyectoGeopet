import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventoServiceProvider } from '../../providers/evento-service/evento-service';
import { CreateMascotaPage } from '../create-mascota/create-mascota';
import { DetalleMascotaPage } from '../detalle-mascota/detalle-mascota';
import { UpdateMascotaPage } from '../update-mascota/update-mascota';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';



@Component({
  selector: 'page-home-mascota',
  templateUrl: 'home-mascota.html',
  providers:[EventoServiceProvider]
})
export class HomeMascotaPage {
  mascotas: any;
  model: any = {};
  idUsuario: any;
  nameUsuario:any;
  constructor(public navCtrl: NavController,
             public servicio: EventoServiceProvider,
             public authService: AuthService) {
             this.ionViewDidLoad();
             this.loadData();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateMascotaPage');
   this.idUsuario = this.authService.getidUsuario();
   this.nameUsuario = this.authService.getNameUsuario();
  }
  loadData(){
   this.servicio.getAllDocuments("mascotas",this.idUsuario).then((e)=>{
     this.mascotas = e;
 });
 }

 goCreate():void{
   this.navCtrl.push(CreateMascotaPage);
 }

 goedit(obj):void{
   this.model = obj;
   this.navCtrl.push(UpdateMascotaPage,{
     //title: this.model.title,
     //text: this.model.text
      data:this.model
   });
 }
 godetail(obj):void{
    this.model = obj;
    this.navCtrl.push(DetalleMascotaPage,{
     data:this.model
   });
 }

deleteMascota(key){
   this.servicio.deleteDocument("mascotas",key).then(()=>{
   this.loadData();//refresh view
 });
}
signOut() {
 this.authService.signOut();
 this.navCtrl.setRoot(LoginPage);
}

}
