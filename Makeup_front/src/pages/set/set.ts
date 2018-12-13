import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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
  mei_id='';
  denglustatus;
  userdata;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPage');
  };
  //当进入页面时触发
  ionViewWillEnter(){
    console.log(window.localStorage.getItem('user'),window.localStorage.hasOwnProperty('user'));
    if (window.localStorage.hasOwnProperty('user')) {
      this.denglustatus=JSON.parse(window.localStorage.getItem('user')).status;
      console.log(this.denglustatus);
    } else {
      this.denglustatus=0;
      console.log('未登录');
    }
  }

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
  exitDenglu(){
    var user=JSON.parse(window.localStorage.getItem('user'));
    var mei_id=user['mei_id'];
    this.http.post('api/login/status',{mei_id:mei_id,status:0},{}).subscribe(data=>{
      console.log(data);
      if(data['status']==0){
        console.log(window.localStorage.getItem('user'));
        window.localStorage.removeItem('user');
        var data: Object = {
          callback: data => {
            console.log(data);
            this.userdata = JSON.parse(window.localStorage.getItem('user'));
          }}
          console.log(window.localStorage.getItem('user'));
        this.navCtrl.push(DengluPage,data);
        console.log('退出登录成功');
        this.denglustatus=0;
      }else{
        console.log('退出登录失败');
      }
    },err=>{
      console.log('error',err.message);
    })
  }
}
