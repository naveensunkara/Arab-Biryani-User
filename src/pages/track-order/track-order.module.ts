import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackOrderPage } from './track-order';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    TrackOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackOrderPage),
  ],
  providers: [Geolocation]
})
export class TrackOrderPageModule {}
