import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements OnInit {
lat:any;
long:any;
  constructor(private geolocation:Geolocation) { }

  ngOnInit() {  
  }
  Gps(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat=resp.coords.latitude
      this.long=resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  
}
