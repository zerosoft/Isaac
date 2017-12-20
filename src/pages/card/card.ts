import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message'
/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {

  constructor(public navCtrl: NavController,public message:MessageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
  }

}
