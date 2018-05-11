import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, ModalController, Modal, ViewController, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  cart: any = 0;
  menuItems: any = [
    {
      title: "Chicken reshmi biryani",
      subhead:'Gravy, Raita and Boiled EGG',
      price: "16.45",
      quantity: 0,
      imgSrc: "/assets/imgs/chicken-biryani1.jpg"
    },
    {
      title: "DUM Biryani",
      subhead:'Chicken Gravy, Raita and Boiled EGG',
      price: "24.45",
      quantity: 0,
      imgSrc: "/assets/imgs/mutton-biryani1.jpg"
    },
    {
      title: "Spl Chicken Biryani",
      subhead:'Chicken Gravy, Raita and Chicken 65 2 Pcs',
      price: "18.90",
      quantity: 0,
      imgSrc: "/assets/imgs/fish-biryani1.jpg"
    },
    {
      title: "Gosht Ki Dum Biryani",
      subhead:'Spl Gravy, Raita',
      price: "21.45",
      quantity: 0,
      imgSrc: "/assets/imgs/egg-biryani1.jpg"
    },
    {
      title: "Naati KoliDonne Biryani",
      price: "20.10",
      subhead : 'Gravy, Raita and Boiled EGG',
      quantity: 0,
      imgSrc: "/assets/imgs/veg-biryani1.jpg"
    }
  ]
  constructor(public navCtrl: NavController, public alertCtrl: ModalController, public viewCtrl: ViewController, events: Events) {
    events.subscribe('modal:finished', (page) => {

      if(page == 'yourpage') {
        //this.navCtrl.push('CartPage', {items: this.menuItems});
        //this.navCtrl.push('MenuPage', {items: this.menuItems});
      }
  
    });
  }

  ionViewDidLoad() {
    this.cartCount();
  }

  add(itemIndex){
    this.menuItems[itemIndex].quantity++;
    this.cartCount();
  }

  remove(itemIndex){
    if(this.menuItems[itemIndex].quantity > 0){
      this.menuItems[itemIndex].quantity--;
    }
    this.cartCount();
  }

  cartCount(){
    this.cart = 0;
    this.menuItems.forEach(element => {
      this.cart = element.quantity + this.cart;
    });
    if(this.cart > 99)
      this.cart = '99+';
  }

  placeOrder(menu){
    this.navCtrl.push('CartPage',{items: this.menuItems})
    
  }

  showConfirm(itemIndex) {
    let confirm = this.alertCtrl.create('MenuPopupPage', {items: this.menuItems, index: itemIndex, cart: this.cart}, {cssClass: 'customModal'});
    confirm.present();
  }
}
