import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecurityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-security',
  templateUrl: 'security.html',
})
export class SecurityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecurityPage');
  }
  items = [
    '修改密码',
    '最近登录记录',
    '安全中心',
  ];
  items1 = [
    '昵称',
    '邮箱',
  ];
  Selected(item: string) {
    console.log("Selected Item", item);
  }
  Selected1(item1: string) {
    console.log("Selected Item1", item1);
  }
}
