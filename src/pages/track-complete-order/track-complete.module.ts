import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TrackCompletePage } from './track-complete';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
    declarations: [
        TrackCompletePage
    ],
    imports: [
      IonicPageModule.forChild(TrackCompletePage),
      Ionic2RatingModule
    ],
    exports: [
        TrackCompletePage
    ]
  })
  export class TrackCompletePageModule { }