import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // checks in console if the page loaded correctly
    console.log('ionViewDidLoad ShopPage');
  }// ionViewDidLoad

  openHomePage()
  {
    this.navCtrl.popToRoot();
  }// openHomePage

  openNikePage()
  {
    this.navCtrl.push("NikePage");
  }// openNikePage

  openAdidasPage()
  {
    this.navCtrl.push("AdidasPage");
  }// openAdidasPage

  openTimberlandPage()
  {
    this.navCtrl.push("TimberlandPage");
  }// openTimberlandPage

  openPumaPage()
  {
    this.navCtrl.push("PumaPage");
  }// openPumaPage

  openAsicsPage()
  {
    this.navCtrl.push("AsicsPage");
  }// openAsicsPage

  openNewBalancePage()
  {
    this.navCtrl.push("NewBalancePage");
  }// openNewBalancePage

}// ShopPage
