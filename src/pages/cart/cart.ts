import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-cart',
    templateUrl: 'cart.html'
})

export class CartPage {
    cartItems: any = [];
    args: any = 0;
    coupon: any;
    cart: any = 0;
    tax: any = 0;
    total: any = 0;
    discountVal: any = 0;

    img: any = [
        "/assets/imgs/chicken-biryani.jpg",
        "/assets/imgs/mutton-biryani.jpg",
        "/assets/imgs/fish-biryani.jpg",
        "/assets/imgs/egg-biryani.jpg",
        "/assets/imgs/veg-biryani.jpg"
    ];
    constructor(public navParams: NavParams, public navCtrl: NavController, public menuCtrl: MenuController) {
        //this.cartItems = navParams.data.items;
        this.cartItems = [
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
              quantity: 3,
              imgSrc: "/assets/imgs/fish-biryani1.jpg"
            },
            {
              title: "Gosht Ki Dum Biryani",
              subhead:'Spl Gravy, Raita',
              price: "21.45",
              quantity: 2,
              imgSrc: "/assets/imgs/egg-biryani1.jpg"
            },
            {
              title: "Naati KoliDonne Biryani",
              price: "20.10",
              subhead : 'Gravy, Raita and Boiled EGG',
              quantity: 3,
              imgSrc: "/assets/imgs/veg-biryani1.jpg"
            }
          ]
        if (this.cartItems.length > 0)
            this.cartCount();
    }

    ionViewDidLoad() {

    }

    parse(a) {
        let c = String(a);
        return parseFloat(c).toFixed(2);
    }

    backButtonClick() {
        this.navCtrl.pop();
    }

    add(item) {
        this.cartItems.forEach((element, index) => {
            if (item === element.title) {
                this.cartItems[index].quantity++;
            }
        });
        this.cartCount();
    }

    remove(item) {
        this.cartItems.forEach((element, index) => {
            if (item === element.title && element.quantity > 0) {
                this.cartItems[index].quantity--;
            }
        });
        this.cartCount();
    }

    cartCount() {
        this.cart = 0;
        this.total = 0;
        this.cartItems.forEach(element => {
            this.cart = element.quantity + this.cart;
            this.total = this.total + (element.quantity * element.price);
        });
        this.tax = this.total * 7 / 100;
        this.total = this.tax + this.total;
        if (this.cart > 99)
            this.cart = '99+';
    }
    nextPage() {
        this.navCtrl.push('AddressPage');
    }
    discount() {
        this.cartCount();
        if (this.coupon == '10percent'){
            this.discountVal = this.total / 10;
            this.total = this.total - (this.total / 10);
        }
        else{
            this.cartCount();
            this.discountVal = 0;
        }
    }
    menu(){
        this.menuCtrl.open();
    }
}