import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { GuidePage } from '../pages/guide/guide';
import { MyFollowsPage } from '../pages/my-follows/my-follows';
import { MyFavoritesPage } from '../pages/my-favorites/my-favorites';
import { ClearPage } from '../pages/clear/clear';
import { AboutmeiPage } from '../pages/aboutmei/aboutmei';
import { PrivacyPage } from '../pages/privacy/privacy';
import { FeedbackPage } from '../pages/feedback/feedback';
import { SetPage } from '../pages/set/set';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  hide:boolean=false;
  more=[['icon-eye','我的关注'],['icon-star','我的收藏'],
  ['icon-lock','隐私政策'],['icon-pen_','反馈与帮助'],
  ['icon-bin','清除缓存'],
  ['icon-set','设置']];

  @ViewChild('myNav') navCtrl: NavController;
  
  constructor(private storage: Storage,
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.storage.get('guide').then(key=>{
      //key=false;
      console.log(key);
      if(key){
        this.rootPage=TabsPage;
      }else{
        this.rootPage=GuidePage;
        this.storage.set('guide',true);
        console.log(key);
      }
    })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goPage(idx){
    this.hide=true;
    switch(idx){
      case 0:
        this.navCtrl.push(MyFollowsPage);
        break;
      case 1:
        this.navCtrl.push(MyFavoritesPage);
        break;
      case 2:
        this.navCtrl.push(PrivacyPage);
        break;
      case 3:
        this.navCtrl.push(FeedbackPage);
        break;
      case 4:
        this.navCtrl.push(ClearPage);
        break;
      case 5:
        this.navCtrl.push(SetPage);
        break;
      default:
        console.log('page not found!');
    }
  }
}
