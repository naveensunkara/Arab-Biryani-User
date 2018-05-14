import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TrackPage } from './track';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
    declarations: [
        TrackPage
    ],
    imports: [
      IonicPageModule.forChild(TrackPage),
      Ionic2RatingModule
    ],
    exports: [
        TrackPage
    ]
  })
  export class TrackPageModule { }