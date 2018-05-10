import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    constructor(public navParams: NavParams, public navCtrl: NavController) {
        this.cartItems = navParams.data.items;
        if(this.cartItems.length > 0)
            this.cartCount();
    }

    ionViewDidLoad() {
        
    }

    parse(a){
        let c = String(a);
        return parseFloat(c).toFixed(2);
    }

    backButtonClick() {
        this.navCtrl.pop();
    }

    add(item) {
        this.cartItems.forEach((element,index) => {
            if(item === element.title){
                this.cartItems[index].quantity++;
            }
        });
        this.cartCount();
    }

    remove(item) {
        this.cartItems.forEach((element,index) => {
            if(item === element.title && element.quantity > 0){
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
        this.tax = this.total*7/100;
        this.total = this.tax+this.total;
        if (this.cart > 99)
            this.cart = '99+';
    }
    nextPage(){
        this.navCtrl.push('PaymentPage');
    }
    discount(){
        this.cartCount();
        if(this.coupon == '10percent')
            this.total = this.total - (this.total/10);
        else
            this.cartCount();
    }
}