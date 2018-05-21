import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-create-ticket',
  templateUrl: 'create-ticket.html',
})
export class CreateTicketPage {
  level: any = 'normal';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  nextpage() {
    this.navCtrl.push('ViewTicketPage');
  }

}
