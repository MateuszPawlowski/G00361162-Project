import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openAboutUsPage()
  {
    this.navCtrl.push('AboutUsPage');
  }// openAboutUsPage

  openShopPage()
  {
    this.navCtrl.push('ShopPage');
  }// openShopPage

  openContactUsPage()
  {
    this.navCtrl.push('ContactUsPage');
  }// openContactUsPage

  openLoginPage()
  {
    this.navCtrl.push('LoginPage');
  }// openLoginPage

  openNikePage()
  {
    this.navCtrl.push("NikePage");
  }// openNikePage

}// HomePage
