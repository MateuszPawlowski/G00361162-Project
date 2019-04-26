import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // checks in console if the page loaded correctly
    console.log('ionViewDidLoad CheckoutPage');
  }// ionViewDidLoad

  makePayment(){
    alert("Thank you for buying at Matt Shop! Your package will be sent to you shortly after we see this message.");
    this.navCtrl.popToRoot();
  }// makePayment

  openHomePage(){
    this.navCtrl.popToRoot();
  }// openHomePage

}// CheckoutPage
