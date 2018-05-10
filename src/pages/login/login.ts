import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams, Events } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';
import { ShareService } from '../../providers/share/share';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { number: string, password: string } = {
    number: '+65 652431',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public share: ShareService,
    public events: Events) {
    }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      if(this.account.number[this.account.number.length-1] == '1'){
        this.share.setUser('branch');
        this.navCtrl.push(MainPage);
        this.events.publish("menuObject", 'branch', 2);
      }
      else if(this.account.number[this.account.number.length-1] == '2')
        this.navCtrl.push('rider-delivery')
      else if(this.account.number[this.account.number.length-1] == '3')
        this.navCtrl.push('rider-user')
    }, (err) => {
      if(this.account.number[this.account.number.length-1] == '1')
        this.navCtrl.push(MainPage);
      else if(this.account.number[this.account.number.length-1] == '2')
        this.navCtrl.push('rider-delivery')
      else if(this.account.number[this.account.number.length-1] == '3')
        this.navCtrl.push('rider-user')
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
