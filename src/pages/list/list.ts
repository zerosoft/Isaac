import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message'
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController,public message:MessageProvider) {
  }


}


