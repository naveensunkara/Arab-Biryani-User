import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu-popup',
  templateUrl: 'menu-popup.html',
})
export class MenuPopupPage {
  params: any;
  itemIndex: any;
  cart: any;
  currentCount: Array<number>= [0,0,0,0,0];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public events: Events) {
    this.params = this.navParams.data.items;
    this.itemIndex = this.navParams.data.index;
    this.cart = this.navParams.data.cart;
  }


  ionViewDidLoad() {
  }

  add(){
    this.params[this.itemIndex].quantity++;
    this.cartCount();
  }

  remove(){
    if(this.params[this.itemIndex].quantity > 0){
      this.params[this.itemIndex].quantity--;
      this.cartCount();
    }
  }
  close(){
    this.viewCtrl.dismiss();
    console.log(this.currentCount)
    this.params[this.itemIndex].quantity = this.currentCount[this.itemIndex];
    this.cartCount();

  }
  parse(a){
    let c = String(a);
    return parseFloat(c).toFixed(2);
  }
  cartCount(){
    this.cart = 0;
    this.params.forEach(element => {
      this.cart = element.quantity + this.cart;
    });
    if(this.cart > 99)
      this.cart = '99+';
  }
  cartPage(){
    this.viewCtrl.dismiss();
    let index = this.params[this.itemIndex].quantity;
    this.currentCount[this.itemIndex] = index;
    console.log(this.currentCount)
    this.events.publish('cart:change', 'MenuPage', this.params);
  }
}
