import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-popup',
  templateUrl: 'menu-popup.html',
})
export class MenuPopupPage {
  params: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params = this.navParams.data;
    console.log(this.params)
  }

  ionViewDidLoad() {
  }

}
