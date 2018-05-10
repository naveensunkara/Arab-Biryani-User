import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-completed',
  templateUrl: 'complete.html'
})

export class CompletePage {
  constructor(public navCtrl: NavController){}
  backButtonClick(){
      this.navCtrl.pop();
  }
  nextPage(){
    this.navCtrl.push('TrackPage');
  }
  ordersPage(){
    this.navCtrl.push('OrderPage');
  }
}