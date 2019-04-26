import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nike',
  templateUrl: 'nike.html',
})
export class NikePage {

  // variables
  updateCart: any =0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }// constructor

  ionViewDidLoad() {
    // checks in console if the page loaded correctly
    console.log('ionViewDidLoad NikePage');
  }// ionViewDidLoad()

  openShopPage()
  {
    // allows the button to go back to shop
    this.navCtrl.push("ShopPage");
  }// openShopPage()

  addCartJordan()
  {
    // updates cart
    this.updateCart+= 190;
    alert("Added To Cart!");
  }// addCartJordan()

  addCartBlazer()
  {
    // updates cart
    this.updateCart+= 110;
    alert("Added To Cart!");
  }// addCartBlazer()

  addCartForce()
  {
    // updates cart
    this.updateCart+= 90;
    alert("Added To Cart!");
  }// addCartForce()

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
  
}// NikePage
