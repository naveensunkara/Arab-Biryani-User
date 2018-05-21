import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewTicketPage } from './view-ticket';

@NgModule({
  declarations: [
    ViewTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewTicketPage),
  ],
})
export class ViewTicketPageModule {}
