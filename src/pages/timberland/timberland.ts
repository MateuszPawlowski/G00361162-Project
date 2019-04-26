import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-timberland',
  templateUrl: 'timberland.html',
})
export class TimberlandPage {

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
 
   addCartSix()
   {
     // updates cart
     this.updateCart+= 190;
     alert("Added To Cart!");
   }// addCartSix()
 
   addCartEarth()
   {
     // updates cart
     this.updateCart+= 190;
     alert("Added To Cart!");
   }// addCartEarth()
 
   addCartHiker()
   {
     // updates cart
     this.updateCart+= 150;
     alert("Added To Cart!");
   }// addCartHiker()
 
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

}// TimberlandPage
