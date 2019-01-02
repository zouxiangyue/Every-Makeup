import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController  } from 'ionic-angular';
import { AppShare } from '../../app/app.share';
import { TaolunPage } from '../taolun/taolun';
/**
 * Generated class for the TopicdailyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topicdaily',
  templateUrl: 'topicdaily.html',
})
export class TopicdailyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public appShare:AppShare,public actionSheetCtrl:ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicdailyPage');
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

  topic_arr=[{headimg:'../../assets/images/img13.jpg',name:'liyue',time:'12-26 14:25',likenum:3,com:'冬天来了，穿衣服保暖最重要了。'},
             {headimg:'../../assets/images/img1.jpg',name:'tingcy',time:'12-20 18:27',likenum:2,com:'想要去运动，有要一起的小伙伴吗？'},
             {headimg:'../../assets/images/女头1.jpg',name:'淡默',time:'11-18 14:12',likenum:2,com:'日常穿搭可以去看我的主页哦~'},
             {headimg:'../../assets/images/img19.jpg',name:'moe',time:'11-16 22:45',likenum:1,com:'学习生活中还是要穿搭大方好看。 '},
  ]
  com_txt;
user=JSON.parse(window.localStorage.getItem('user'));
  goTaolun(){
    var data={
      callback:data=>{
        console.log(data);
        this.com_txt=data;
        var d=new Date();
        var dm= d.getMonth()<10 ? '0'+(d.getMonth()+1):d.getMonth()+1+'';
        var dd=d.getDate()<10 ? '0'+d.getDate():d.getDate()+'';
        var dh=d.getHours()<10 ? '0'+d.getHours():d.getHours()+'';
        var dmi=d.getMinutes()<10 ? '0'+d.getMinutes():d.getMinutes()+'';
        var ds=d.getSeconds()<10 ? '0'+d.getSeconds():d.getSeconds()+''
        var time=dm+'-'+dd+' '+dh+':'+dmi;
        var com= {headimg:this.user.headimg,name:this.user.name,time:time,likenum:0,com:this.com_txt};
        this.topic_arr.push(com);
      }
    }
    this.navCtrl.push(TaolunPage,data);
  }
islike(e,i){
  console.log(e.target.id)
  if(e.target.id=='like'){
    console.log(2,e.target.id)
    e.target.id='nolike';
    console.log(3,e.target.id)
    this.topic_arr[i].likenum++;
    e.target.style.color='#F09595'
  }else if(e.target.id=='nolike'){
    console.log(1,e.target.id)
    e.target.id='like';
    this.topic_arr[i].likenum--;
    e.target.style.color='gray'
  }
}
}
