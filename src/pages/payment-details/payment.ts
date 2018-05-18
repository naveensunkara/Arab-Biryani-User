import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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