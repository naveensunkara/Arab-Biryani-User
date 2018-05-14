import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-order',
    templateUrl: 'order.html'
})

export class OrderPage {
    order: any = 'ongoing';
    completedOrders: any= [
        {
            orderId: 'PO# 1101109',
            item: 4,
            quantity: 50,
            deliverydate: "07 May 2018",
            total: 75.34,
            date: 'On 25, Apr, 2018 11:47 PM'
        },
        {
            orderId: 'PO# 1101108',
            item: 5,
            quantity: 60,
            deliverydate: "05 May 2018",
            total: 45.34,
            date: 'On 24, Apr, 2018 09:30 PM'
        },
        {
            orderId: 'PO# 1101107',
            item: 2,
            quantity: 25,
            deliverydate: "03 May 2018",
            total: 65.75,
            date: 'On 23 Apr, 2018 06:05 PM'
        },
        {
            orderId: 'PO# 1101107',
            item: 2,
            quantity: 25,
            deliverydate: "03 May 2018",
            total: 65.75,
            date: 'On 23 Apr, 2018 06:05 PM'
        },
        {
            orderId: 'PO# 1101107',
            item: 2,
            quantity: 25,
            deliverydate: "03 May 2018",
            total: 65.75,
            date: 'On 23 Apr, 2018 06:05 PM'
        }
    ]
    constructor(public navCtrl: NavController) { }
    backButtonClick() {
        this.navCtrl.pop();
    }
    trackPage(page) {
        this.navCtrl.push(page);
    }
    segmentChanged($event) {
        console.log(this.order)
    }
    nextpage(){
        this.navCtrl.push('TrackCompletePage');
    }
}