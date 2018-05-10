import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'account.html'
})

export class AccountPage {
  details: any = {
    name: 'STREET BiRIYANI',
    phone: '+65 89745641',
    location: 'Blk 10-12 Street, 101-11 Singapore 609878'
  }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) { }

  backButtonClick() {
    this.navCtrl.pop();
  }
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Change Password',
      message: "Enter your New Password",
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'New Password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  editAddress(){
    let prompt = this.alertCtrl.create({
      title: 'Change Details',
      message: "Enter your Details",
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'User Name'
        },
        {
          name: 'phone',
          type: 'text',
          placeholder: 'Mobile Number'
        },
        {
          name: 'location',
          type: 'text',
          placeholder: 'Location'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.details.name = data.username;
            this.details.phone = data.phone;
            this.details.location = data.location;
            console.log(data)
          }
        }
      ]
    });
    prompt.present();
  }
}