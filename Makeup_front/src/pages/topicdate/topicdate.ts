import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AppShare } from '../../app/app.share';
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-topicdate',
  templateUrl: 'topicdate.html',
})
export class TopicdatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public appShare:AppShare,public actionSheetCtrl:ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicdatePage');
  }

  goBack(){
    this.navCtrl.pop();
  }

  share(event) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '分享',
      buttons: [
        {
          text: 'QQ好友',
          handler: () => {
            this.appShare.qqShare(0)
          }
        },
        {
          text: 'QQ空间',
          handler: () => {
            this.appShare.qqShare(1)
          }
        },
        {
          text: '微信好友',
          handler: () => {
            this.appShare.wxShare(0)
          }
        },
        {
          text: '朋友圈',
          handler: () => {
            this.appShare.wxShare(1)
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
