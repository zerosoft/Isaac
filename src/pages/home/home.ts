import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public message:MessageProvider) {

  }

}
