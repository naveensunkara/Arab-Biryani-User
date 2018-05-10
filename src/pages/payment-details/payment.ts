import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-payment-details',
  templateUrl: 'payment.html'
})

export class PaymentPage {
    constructor(public navCtrl: NavController){}

    nextPage(){
        this.navCtrl.push('CompletePage');
    }

    backButtonClick(){
        this.navCtrl.pop();
    }
}