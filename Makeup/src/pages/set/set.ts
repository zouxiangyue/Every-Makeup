import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutmeiPage } from '../aboutmei/aboutmei';
import { DengluPage } from '../denglu/denglu';

/**
 * Generated class for the SetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPage');
  };

  setting(){
    this.navCtrl.push(AboutmeiPage);
  }

  goDenglu(){
    this.navCtrl.push(DengluPage);
  }
}
