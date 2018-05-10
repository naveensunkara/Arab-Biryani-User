import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyFilterPipe } from '../../cart.pipe';
import { CartPage } from './cart';

@NgModule({
  declarations: [
    CartPage,
    MyFilterPipe
  ],
  imports: [
    IonicPageModule.forChild(CartPage)
  ],
  exports: [
    CartPage
  ]
})
export class MenuPageModule { }
