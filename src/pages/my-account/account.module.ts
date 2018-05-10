import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AccountPage } from './account';
import { MenuPage } from '../menu/menu';

@NgModule({
    declarations: [
        AccountPage
    ],
    imports: [
      IonicPageModule.forChild(AccountPage)
    ],
    exports: [
        AccountPage
    ]
  })
  export class AccountPageModule { }