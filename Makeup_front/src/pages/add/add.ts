import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WreleasePage } from '../wrelease/wrelease';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  close(){
    this.navCtrl.pop();
  }

  write(){
    this.navCtrl.push(WreleasePage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
