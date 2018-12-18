import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ImprovePage } from '../improve/improve';
import { SetPage } from '../set/set';
import { DengluPage } from '../denglu/denglu';
import { FensiPage } from '../fensi/fensi';
import { PaPage } from '../pa/pa';
import { DianzanPage } from '../dianzan/dianzan';
import { MyFollowsPage } from '../my-follows/my-follows';
import { AppShare } from '../../app/app.share';


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
  icons: string = "work";//默认选中作品
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public appShare: AppShare, public actionSheetCtrl: ActionSheetController) {
  }
  user:object={};
  denglustatus:boolean=false;
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  };
  ionViewWillEnter(){
    if (window.localStorage.hasOwnProperty('user')) {
      this.denglustatus=true;
      this.user = JSON.parse(window.localStorage.getItem('user'));
    } else {
      this.user = {//接受登录页传输的用户数据 
        mei_id: '*******',
        name: '未登录',
        headimg:'../../assets/images/1.jpg'
      };
      this.denglustatus=false;
      console.log('未登录');
    }
  }

  clickHead() {
    if (window.localStorage.hasOwnProperty('user')) {
      console.log('上传头像');
    } else {
      var data: Object = {
          callback: data => {
          console.log(data);
          this.user = JSON.parse(window.localStorage.getItem('user'));
        }
      };
      this.navCtrl.push(DengluPage, data);
    }
  };

  setting() {
    this.navCtrl.push(ImprovePage);
  }
  setting1() {
    this.navCtrl.push(SetPage);
  }
  gotoFollows() {
    this.navCtrl.push(MyFollowsPage);
  }
  gotoFensi() {
    this.navCtrl.push(FensiPage);
  }
  gotoDianzan() {
    this.navCtrl.push(DianzanPage);
  }
  goSub() {
    this.navCtrl.push(PaPage);
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
