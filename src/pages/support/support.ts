import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {
  tickets: any = [
    {
      ticketNo: 'TKT #3003-010',
      status: 'OPEN',
      reason: 'Raised for Order #1100011',
      date: 'On 25, Apr, 2018 11:47 PM',
      comments: '3'
    },
    {
      ticketNo: 'TKT #ASB110010',
      status: 'CLOSED',
      reason: 'Request for Refund',
      date: 'On 24, Apr, 2018 09:30 AM',
      comments: '6'
    }
  ];
  category: any = 'all';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  tempArr: any = this.tickets;
  segmentChanged($event) {
    this.tempArr = [];
    if (this.category == 'all')
      this.tempArr = this.tickets;
    else {
      this.tickets.forEach(element => {
        if (element.status == this.category.toUpperCase())
          this.tempArr.push(element);
      });
    }
  }
  nextpage() {
    this.navCtrl.push('CreateTicketPage');
  }
  viewTicket(){
    this.navCtrl.push('ViewTicketPage');
  }
}
