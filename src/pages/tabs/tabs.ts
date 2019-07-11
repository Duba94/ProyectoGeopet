import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { HomeMascotaPage } from '../home-mascota/home-mascota';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomeMascotaPage ;
  tab2Root: any = HomePage;
  tab3Root: any = AboutPage;

  constructor() {

  }
}
