import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google:any;

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // variables + viewChild
  @ViewChild('map') mapRef: ElementRef;
  map: any;

  ionViewDidLoad() {
    // checks if everything works with the map and shows the map
    console.log(this.mapRef);
    this.showMap();
  }

  showMap(){
    // location in the world
    const location = new google.maps.LatLng(53.283992, -8.929727);

    // map options
    const options = {
      center: location,
      zoom: 15,
      mapTypeId: 'hybrid'
    };

    // map is created
    this.map = new google.maps.Map(this.mapRef.nativeElement,options);
  
    // adds a marker on the map
    this.addMarker(location, this.map);
  }

  // marker options
  addMarker(position, map){
    return new google.maps.Marker({
      position,
      map
    });
  }
  
  contact(){
    alert("Thank you for contacting with us. Our team will come back to you shortly.");
    this.navCtrl.popToRoot();
  }// contact

  openHomePage()
  {
    this.navCtrl.popToRoot();
  }// openHomePage

}// ContactUsPage
