import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TysetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tyset',
  templateUrl: 'tyset.html',
})
export class TysetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TysetPage');
  }
  items = [
    '字体大小',
    '照片、视频和文件',
    '辅助功能',
    '流量统计',
    '清理缓存'
  ];
  download: string = "f";
  language: string = 'moren';
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
