import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutmeiPage } from '../aboutmei/aboutmei';
import { DengluPage } from '../denglu/denglu';
import {ManagePage} from '../manage/manage';
import {SecurityPage} from '../security/security';
import {XxsetPage} from '../xxset/xxset';
import {TysetPage} from '../tyset/tyset';

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

  setting0(){
    this.navCtrl.push(ManagePage);
  }
  setting1(){
    this.navCtrl.push(SecurityPage);
  }
  setting2(){
    this.navCtrl.push(XxsetPage);
  }
  setting3(){
    this.navCtrl.push(TysetPage);
  }
  setting4(){
    this.navCtrl.push(AboutmeiPage);
  }
  goDenglu(){
    this.navCtrl.push(DengluPage);
  }
}
