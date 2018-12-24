import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController  } from 'ionic-angular';
import { AppShare } from '../../app/app.share';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { DengluPage } from '../denglu/denglu';
/**
 * Generated class for the PaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pa',
  templateUrl: 'pa.html',
})
export class PaPage {
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public appShare: AppShare, public actionSheetCtrl: ActionSheetController,
    public http:HttpClient) {
  }
  work_user;
  work_id;
  ngOnInit() {
    this.work_user=this.navParams.get('work_user');
    this.work_id=this.navParams.get('work_id');
    console.log(this.work_user,this.work_id);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PaPage');
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
  isfollow=0;
  user;
  ionViewWillEnter(){
    this.user=JSON.parse(window.localStorage.getItem('user'));
  }
  follow(f) {
    if (this.user) {
      let option={mei_id:this.user.mei_id,isfollow:this.isfollow}
      if (f == 0) {
        this.http.post('api/login/follow',option,{}).subscribe(()=>{
          console.log('关注')
        })
        this.isfollow = 1;
      } else if (f == 1) {
        this.http.post('api/login/follow',option,{}).subscribe(()=>{
          console.log('取消关注');
        })
        this.isfollow = 0;
      }
    }else{
      this.navCtrl.push(DengluPage);
    }
  }
  islike=0;
  like(l) {
    if (this.user) {
      let option={work_id:this.work_id,islike:this.islike}
      if (l == 0) {
        this.http.post('api/login/like',option,{}).subscribe(()=>{
          console.log('点赞')
        })
        this.islike = 1;
      } else if (l == 1) {
        this.http.post('api/login/like',option,{}).subscribe(()=>{
          console.log('取消点赞');
        })
        this.islike = 0;
      }
    }else{
      this.navCtrl.push(DengluPage);
    }
  }
}
