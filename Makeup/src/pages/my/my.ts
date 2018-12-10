import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImprovePage } from '../improve/improve';
import { SetPage } from '../set/set';
import { DengluPage } from '../denglu/denglu';
import { FensiPage } from '../fensi/fensi';
import { PaPage } from '../pa/pa';
import { DianzanPage } from '../dianzan/dianzan';


/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  icons:string="work";//默认选中作品
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }
goDenglu(){
  this.navCtrl.push(DengluPage);
}
  setting(){
    this.navCtrl.push(ImprovePage);
  }
  setting1(){
    this.navCtrl.push(SetPage);
  }
  gotoFensi(){
    this.navCtrl.push(FensiPage);
  }
  gotoDianzan(){
    this.navCtrl.push(DianzanPage);
  }
  goSub(){
    this.navCtrl.push(PaPage);
  }
}
