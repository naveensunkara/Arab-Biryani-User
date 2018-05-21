import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTicketPage } from './create-ticket';

@NgModule({
  declarations: [
    CreateTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTicketPage),
  ],
})
export class CreateTicketPageModule {}
