import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { OrderPage } from './order';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
    declarations: [
        OrderPage
    ],
    imports: [
        IonicPageModule.forChild(OrderPage),
        Ionic2RatingModule 
    ],
    exports: [
        OrderPage
    ]
})
export class OrderPageModule { } 