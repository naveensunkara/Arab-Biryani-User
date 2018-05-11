import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu-popup',
  templateUrl: 'menu-popup.html',
})
export class MenuPopupPage {
  params: any;
  itemIndex: any;
  cart: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
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
}
