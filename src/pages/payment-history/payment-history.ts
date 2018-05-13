import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-payment-history',
    templateUrl: 'payment-history.html'
})

export class PaymentHistoryPage {
    category: any = 'all';
    history: any = [
        {
            type: 'paid',
            title: 'Paid for Order',
            amount: '$ 1165.44',
            date: 'On 25, Apr, 2018 11:47 PM',
            icon: 'md-card',
            order: 'Order # 1100011'
        },{
            type: 'paid',
            title: 'Paid for Order',
            amount: '$ 785.35',
            date: 'On 23, Apr, 2018 09:27 PM',
            icon: 'md-card',
            order: 'Order # 1100009'
        },
        {
            type: 'cancelled',
            title: 'Cancelled Order',
            amount: '$ 785.35',
            date: 'On 23, Apr, 2018 09:27 PM',
            icon: 'md-card',
            order: 'Order # 1100009'
        },
        {
            type: 'paid',
            title: 'Paid for Order',
            amount: '$ 785.35',
            date: 'On 23, Apr, 2018 09:27 PM',
            icon: 'md-card',
            order: 'Order # 1100009'
        },
        {
            type: 'cancelled',
            title: 'Cancelled Order',
            amount: '$ 785.35',
            date: 'On 23, Apr, 2018 09:27 PM',
            icon: 'md-card',
            order: 'Order # 1100009'
        }
    ]
    tempArr: any = this.history;
    constructor(public navCtrl: NavController) { }
    
    segmentChanged($event){
        this.tempArr = [];
        if(this.category == 'all')
            this.tempArr = this.history;
        else{
            this.history.forEach(element => {
                if(element.type == this.category)
                    this.tempArr.push(element);
            });
        }
    }
    nextpage(){
        this.navCtrl.push('TrackPage');
    }
    
}