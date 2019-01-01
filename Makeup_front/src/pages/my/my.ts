import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ImprovePage } from '../improve/improve';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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
    public appShare: AppShare, public actionSheetCtrl: ActionSheetController,
  public http:HttpClient) {
  }
  
  denglustatus:boolean=false;
  user=JSON.parse(window.localStorage.getItem('user'));
  mylikes=JSON.parse(window.localStorage.getItem('mylikes'));
  topics;
  mytopics
  guanzhu_len;
  likenum=0;
  ionViewWillEnter(){
    console.log(123);
    this.mylikes=JSON.parse(window.localStorage.getItem('mylikes'));
    if (window.localStorage.hasOwnProperty('user')) {
      this.denglustatus=true;
      this.user = JSON.parse(window.localStorage.getItem('user'));
      this.http.post('api/login/myworks',{mei_id:this.user['mei_id']}).subscribe(data=>{
      console.log(data);
      this.myworks=data;
      for(var i=0;i<this.myworks.length;i++){
        this.myworks[i].img=(this.myworks[i].img).split(',')
        console.log(this.myworks);
      }
      this.http.post('api/login/myxihua',{mei_id:this.user.mei_id}).subscribe(data=>{
        this.mylikes=data;
        console.log(this.mylikes);
        for(var i=0;i<this.mylikes.length;i++){
          this.mylikes[i][0].img=(this.mylikes[i][0].img).split(',');
          window.localStorage.setItem('mylikes',JSON.stringify(this.mylikes))
        }
        console.log(this.mylikes);
      })
      this.mytopics=JSON.parse(window.localStorage.getItem('mytopics')) || []
      console.log(this.mytopics.length,this.user.follownum);
      this.guanzhu_len=this.mytopics.length+this.user.follownum;
      console.log(this.guanzhu_len)
    })
    console.log(this.mylikes)
    } else {
      this.user = {//接受登录页传输的用户数据 
        mei_id: '*******',
        name: '未登录',
        headimg:'../../assets/images/1.jpg',
        follownum:0,
        likenum:this.likenum,
        fannum:0,
      };
      this.denglustatus=false;
      console.log('未登录');
    }
    this.guanzhu_len= 0;
    console.log(this.user)
    this.http.post('api/login/likenum',{mei_id:this.user.mei_id}).subscribe(data=>{
      this.likenum=data[0].likenum;
      console.log(this.likenum)
    })
  }

  ngOnInit() {
    console.log(this.mylikes)
    //this.user=JSON.parse(window.localStorage.getItem('user'));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
    console.log(this.user);
    console.log(this.guanzhu_len)
  };
  myworks;

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
  isActive=true;
  isClick(f){
    this.isActive =f;
  }
  goPa(i,k){
    //console.log(i,this.myworks[i])
    if(k==0){
      this.navCtrl.push(PaPage,{mywork:this.myworks[i]})
    }else if(k==1){
      this.navCtrl.push(PaPage,{work_user:this.mylikes[i][1],work:this.mylikes[i][0]});
    }
  }
}
