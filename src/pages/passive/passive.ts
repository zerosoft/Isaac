import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message'
@Component({
  selector: 'page-passive',
  templateUrl: 'passive.html',
})
export class PassivePage {

  constructor(public navCtrl: NavController,public message:MessageProvider) {
  }


}
