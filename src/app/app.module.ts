import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GoogleMaps } from '@ionic-native/google-maps';

import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CreateEventoPage } from '../pages/create-evento/create-evento';
import { DetalleEventoPage } from '../pages/detalle-evento/detalle-evento';
import { UpdateEventoPage } from '../pages/update-evento/update-evento';

import { CreateMascotaPage } from '../pages/create-mascota/create-mascota';
import { HomeMascotaPage } from '../pages/home-mascota/home-mascota';
import { DetalleMascotaPage } from '../pages/detalle-mascota/detalle-mascota';
import { UpdateMascotaPage } from '../pages/update-mascota/update-mascota';

import { RegistroPage } from '../pages/registro/registro';
import { Facebook } from "@ionic-native/facebook";
import { TabsPage} from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AboutPage} from '../pages/about/about';

import { MostrarMapsPage} from '../pages/mostrar-maps/mostrar-maps';
import { ConfigMapsPage} from '../pages/config-maps/config-maps';

import { EventoServiceProvider } from '../providers/evento-service/evento-service';
import { AuthService} from '..//providers/auth-service';


const firebaseConfig  = {
   apiKey: "AIzaSyDHlXtFtG85CJk0KQFYvxaupqneGp1B8Yg",
   authDomain: "geopetapp.firebaseapp.com",
   databaseURL: "https://geopetapp.firebaseio.com",
   projectId: "geopetapp",
   storageBucket: "geopetapp.appspot.com",
   messagingSenderId: "1041351752524"
 };
  firebase.initializeApp(firebaseConfig );
@NgModule({
  declarations: [
    MyApp, LoginPage, TabsPage, AboutPage,RegistroPage,
    HomePage, CreateEventoPage, DetalleEventoPage, UpdateEventoPage,
    HomeMascotaPage, CreateMascotaPage, DetalleMascotaPage, UpdateMascotaPage,
    MostrarMapsPage, ConfigMapsPage

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, LoginPage, TabsPage, AboutPage,RegistroPage,
    HomePage, CreateEventoPage, DetalleEventoPage, UpdateEventoPage,
    HomeMascotaPage, CreateMascotaPage, DetalleMascotaPage, UpdateMascotaPage,
    MostrarMapsPage, ConfigMapsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    EventoServiceProvider,
    Facebook ,
    GoogleMaps,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})


export class AppModule {}
