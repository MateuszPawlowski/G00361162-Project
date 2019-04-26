import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // variables
  username:string;
  password:string;
  regUsername: string;
  usernameCheck: string = "admin";
  regPassword: string;
  passwordCheck: string = "admin";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  } 

  logIn(){
    // if statement to see if the user entered in the right uname and password
    if(this.username == this.usernameCheck && this.password == this.passwordCheck){
      alert("You logged in!");
      this.navCtrl.popToRoot();
    }// logIn
    else
    {
      // if the uname or password is wrong this alert will pop up
      alert("Failed to Log in. Please try again");
    }
  }// logIn

  signUp(){
    // allows the user to register
    this.usernameCheck = this.regUsername;
    this.passwordCheck = this.regPassword;
    alert("Register Successful");
  }// signUp

  openHomePage()
  {
    this.navCtrl.popToRoot();
  }// openHomePage

}// LoginPage
