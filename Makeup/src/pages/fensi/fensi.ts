import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// @IonicPage()
@Component({
  selector: 'page-fensi',
  templateUrl: 'fensi.html',
})
export class FensiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FensiPage');
  }
  back(){
    this.navCtrl.pop();
  }
}
