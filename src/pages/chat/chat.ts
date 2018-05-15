import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import * as $ from "jquery";
import 'slick-carousel/slick/slick';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  slides = [
    {
      img: "/assets/imgs/chicken-biryani1.jpg", 
      title: "Chicken reshmi biryani",
      subhead:'Gravy, Raita and Boiled EGG',
      price: "16.45"
    },
    {
      img: "/assets/imgs/mutton-biryani1.jpg",
      title: "DUM Biryani",
      subhead:'Chicken Gravy, Raita and Boiled EGG',
      price: "24.45"
    },
    {
      img: "/assets/imgs/fish-biryani1.jpg",
      title: "Spl Chicken Biryani",
      subhead:'Chicken Gravy, Raita and Chicken 65 2 Pcs',
      price: "18.90"
    },
    {
      img: "/assets/imgs/egg-biryani1.jpg",
      title: "Gosht Ki Dum Biryani",
      subhead:'Spl Gravy, Raita',
      price: "21.45"
    },
    {
      img: "/assets/imgs/veg-biryani1.jpg",
      title: "Naati KoliDonne Biryani",
      price: "20.10",
      subhead : 'Gravy, Raita and Boiled EGG'
    }
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public events: Events) {
    events.subscribe('chat:close', (page) => {
      if(page == 'ChatPage'){
        this.navCtrl.push('NearbyPage');
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  // goback(){
  //   //this.navCtrl.pop();
  //   this.navCtrl.push('RateChatPage');
  // }
  presentPopover() {
    let popover = this.popoverCtrl.create('RateChatPage');
    popover.present();
  }
}
