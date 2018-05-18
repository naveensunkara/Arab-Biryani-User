import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-track-complete-order',
  templateUrl: 'track-complete.html'
})

export class TrackCompletePage {
  rate: any = 4;
  constructor(public navCtrl: NavController) { }

  backButtonClick() {
    this.navCtrl.pop();
  }
  ordersPage(){
    this.navCtrl.push('OrderPage');
  }
}