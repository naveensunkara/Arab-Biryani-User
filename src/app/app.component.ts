import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, MenuController} from 'ionic-angular';
import { FirstRunPage } from '../pages';
import { Settings } from '../providers';

@Component({
  template: `<ion-menu [content]="content" [swipeEnabled]="swipe">
    <ion-content>
    <ion-header>
      <ion-toolbar (click)="nextPage()">
        <button ion-button icon-only>
          <img src="../assets/imgs/user.png" />
        </button>
        <ion-title>Ashley</ion-title>
        <ion-title>+65 89745641</ion-title>
      </ion-toolbar>
    </ion-header>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;
  swipe: boolean = false;
  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Find Biriyani', component: 'NearbyPage' },
    { title: 'Book Biriyani', component: 'MenuPage' },
    { title: 'My Orders', component: 'OrderPage' },
    { title: 'Payment History', component: 'PaymentHistoryPage' },
    { title: 'My Account', component: 'AccountPage' },
    { title: 'Notification', component: 'NotificationPage' },
    { title: 'Support', component: 'SupportPage' },
    { title: 'Log Out', component: 'LoginPage' }
  ]

  nextPage(){
    this.nav.setRoot('AccountPage');
    this.menubar.close();
  }

  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen, public menubar: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#5c0070');
      this.splashScreen.show();
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
