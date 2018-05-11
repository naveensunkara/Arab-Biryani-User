import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-notification',
    templateUrl: 'notification.html'
})

export class NotificationPage {
    notification: any = [
        {
            title: 'Order Accepted',
            date: '25, Apr, 2018 11:47 PM',
            order: 'Purchase Order #1100011 Accepted'
        },{
            title: 'Delivered',
            date: 'On 24, Apr, 2018 09:30 AM',
            order: 'Purchase Order #1100010 Delivered to you'
        },{
            title: 'Order Dispatched',
            date: '24, Apr, 2018 08:40 AM',
            order: 'Purchase Order #1100010 dispatched. Our rider is on the way'
        },{
            title: 'Packed for Delivery',
            date: '24, Apr, 2018 08:40 AM',
            order: 'Purchase Order #1100010 is packed for delivery.'
        }
    ]
    constructor(public navCtrl: NavController) { }
    
}