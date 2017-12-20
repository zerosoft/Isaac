import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message'

@Component({
  selector: 'page-accessory',
  templateUrl: 'accessory.html',
})
export class AccessoryPage {

  constructor(public navCtrl: NavController,public message:MessageProvider) {
  }

}
