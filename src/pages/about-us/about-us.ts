import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // checks in console if the page loaded correctly
    console.log('ionViewDidLoad AboutUsPage');
  }// ionViewDidLoad

  openHomePage()
  {
    // allows the button to go back to home
    this.navCtrl.popToRoot();
  }// openHomePage

}// AboutUsPage
