import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-config-maps',
  templateUrl: 'config-maps.html',
})
export class ConfigMapsPage {
model: any={};
  constructor(public navCtrl: NavController) {
  }
}
