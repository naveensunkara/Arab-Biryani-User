import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPopupPage } from './menu-popup';

@NgModule({
  declarations: [
    MenuPopupPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPopupPage),
  ],
})
export class MenuPopupPageModule {}
