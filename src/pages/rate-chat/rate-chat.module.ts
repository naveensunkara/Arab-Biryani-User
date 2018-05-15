import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RateChatPage } from './rate-chat';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    RateChatPage,
  ],
  imports: [
    IonicPageModule.forChild(RateChatPage),
    Ionic2RatingModule
  ],
})
export class RateChatPageModule {}
