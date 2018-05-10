import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackOrderPage } from './track-order';

@NgModule({
  declarations: [
    TrackOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackOrderPage),
  ],
})
export class TrackOrderPageModule {}
