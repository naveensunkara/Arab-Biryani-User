import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageAddressPage } from './manage-address';

@NgModule({
  declarations: [
    ManageAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageAddressPage),
  ],
  exports: [
    ManageAddressPage
  ]
})
export class ManageAddressPageModule {}
