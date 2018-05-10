import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearbyPage } from './nearby';

import { Geolocation } from '@ionic-native/geolocation';
@NgModule({
  declarations: [
    NearbyPage,
  ],
  imports: [
    IonicPageModule.forChild(NearbyPage),
  ],
  providers: [Geolocation]
})
export class NearbyPageModule {}
