import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';

import { SlickModule } from 'ngx-slick';

@NgModule({
  declarations: [
    ChatPage
  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
    SlickModule.forRoot()
  ],
})
export class ChatPageModule {}
