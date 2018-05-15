import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';

/**
 * Generated class for the RateChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rate-chat',
  templateUrl: 'rate-chat.html',
})
export class RateChatPage {
  thankyou: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RateChatPage');
  }
  nextPage() {
    this.viewCtrl.dismiss().then(()=>{

      setTimeout(()=>{
        this.events.publish('chat:close','ChatPage');
      },500)
    })
  }
}
