import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-asics',
  templateUrl: 'asics.html',
})
export class AsicsPage {

  // variables
  updateCart: any =0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // checks in console if the page loaded correctly
    console.log('ionViewDidLoad NikePage');
  }// ionViewDidLoad()

  openShopPage()
  {
    // allows the button to go back to shop
    this.navCtrl.push("ShopPage");
  }// openShopPage()

  addCartGel()
  {
    // updates cart
    this.updateCart+= 150;
    alert("Added To Cart!");
  }// addCartGel()

  addCartNatural()
  {
    // updates cart
    this.updateCart+= 80;
    alert("Added To Cart!");
  }// addCartNatural()

  addCartPreshot()
  {
    // updates cart
    this.updateCart+= 100;
    alert("Added To Cart!");
  }// addCartPreshot()

  openCheckoutPage()
  {
    // if statement to check if the cart total is 0
    if(this.updateCart == 0)
    {
      alert("You cannot checkout with a empty cart");
    }// if
    else
    {
      // alows the button to go to checkout
      this.navCtrl.push("CheckoutPage");
    }// else
  }// openCheckoutPage()

  cart()
  {
    alert("This is your total in cart: £" + this.updateCart);
  }// cart()

}// AsicsPage
