import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-mostrar-maps',
  templateUrl: 'mostrar-maps.html',
})
export class MostrarMapsPage {
  
  map: GoogleMap;
  constructor(private navCtrl: NavController, 
              private googleMaps: GoogleMaps
  ){}
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateMascotaPage');
    this.loadMap();
  }
  loadMap(){

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904, // default location
          lng: -89.3809802 // default location
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
    .then(() => {
      // Now you can use all methods safely.
      this.getPosition();
      this.addMarker();
    })
    .catch(error =>{
      console.log(error);
    });

  }

  getPosition(): void{
    this.map.getMyLocation()
    .then(response => {
      this.map.moveCamera({
        target: response.latLng
      });
      this.map.addMarker({
        title: 'My Position',
        icon: 'blue',
        animation: 'DROP',
        position: response.latLng
      });
    })
    .catch(error =>{
      console.log(error);
    });
  }
  
  addMarker(){
    /*
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getMyLocation
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

    }
    addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
    */
  }

}
