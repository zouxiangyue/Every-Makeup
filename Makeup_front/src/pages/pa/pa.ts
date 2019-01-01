import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, App } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { AppShare } from '../../app/app.share';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { DengluPage } from '../denglu/denglu';
import { CommentPage } from '../comment/comment';

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
  work;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public appShare: AppShare, public actionSheetCtrl: ActionSheetController,
    public http:HttpClient,public viewCtrl:ViewController,
    public appCtrl: App) {
  }
  work_user;
  islike=0;
  isfollow=0;
  user;
  isuser_work=true;
  mylikes;
  mylikes_users;
  mystars;
  relate_works;
  myfollows;
  ngOnInit() {
    this.user=JSON.parse(window.localStorage.getItem('user'));
    this.work_user = this.navParams.get('work_user') || this.user;
    this.work = this.navParams.get('work') || this.navParams.get('mywork');
    this.http.post('/api/login/pawork',{work_id:this.work.work_id}).subscribe(data=>{
      this.work=data;
      this.work['img']=this.work['img'].split(',');
    })
    this.mylikes=JSON.parse(window.localStorage.getItem('mylikes')) || [];
    this.myfollows=JSON.parse(window.localStorage.getItem('myfollows')) || [];
    this.mystars=JSON.parse(window.localStorage.getItem('mystars')) || [];
    if(this.navParams.get('work')){
      this.isuser_work=true;
      this.http.post('api/home/relate',{kind:this.work['kind']}).subscribe(data=>{
        this.relate_works=data;
        //console.log(this.relate_works);
        for(var i=0;i<this.relate_works.length;i++){
          this.relate_works[i][0].img=(this.relate_works[i][0].img).split(',')
          //console.log(this.works);
        }
      })
    }else if(this.navParams.get('mywork')){
      if(typeof(this.work['img'])=='string'){this.changeimg()};
      this.isuser_work=false;
    }
    console.log(this.work_user, this.work);
    this.http.post('api/login/scan', { work_id: this.work['work_id'] }, {}).subscribe(data => {
      console.log('浏览量：', data['scannum'])
    })
    console.log(this.mylikes)
    for(var i=0;i<this.mylikes.length;i++){
      console.log(this.mylikes[i][0].work_id==this.work.work_id)
      if(this.mylikes[i][0].work_id==this.work.work_id){
        this.islike=1;
      }
    }
    for(var i=0;i<this.mystars.length;i++){
      console.log(this.mystars[i][0].work_id==this.work.work_id)
      if(this.mystars[i][0].work_id==this.work.work_id){
        this.isstar=1;
      }
    }
    console.log(this.myfollows)
    for(var i=0;i<this.myfollows.length;i++){
      console.log(this.myfollows[i].mei_id,this.work_user.mei_id)
      if(this.myfollows[i].mei_id==this.work_user.mei_id){
        this.isfollow=1;
      }
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PaPage');
    console.log(this.work);
  }
  changeimg(){
      this.work['img']=this.work['img'].split(',');
      console.log(this.work);
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
  myfollow(){
    if(window.localStorage.getItem('myfollows') && window.localStorage.getItem('myfollows')!='[]'){
      this.myfollows=JSON.parse(window.localStorage.getItem('myfollows'));
      this.myfollows.unshift(this.work_user);//将关注好友到关注列表
      window.localStorage.setItem('myfollows',JSON.stringify(this.myfollows));
      console.log(this.myfollows)
    }else{
      this.myfollows.push(this.work_user);
      window.localStorage.setItem('myfollows',JSON.stringify(this.myfollows));
      console.log(this.myfollows,window.localStorage.getItem('myfollows'));
    }
  }
  clearmyfollow(){
    for(var i=0;i<this.myfollows.length;i++){
      console.log(this.myfollows[i].mei_id==this.work_user.mei_id);
      if(this.myfollows[i].mei_id==this.work_user.mei_id){
        this.myfollows.splice(i,1);
      }
    }
    window.localStorage.setItem('myfollows',JSON.stringify(this.myfollows));
  }

  follow(f) {
    if (this.user) {
      let option={mei_id:this.user.mei_id,bymei_id:this.work_user.mei_id,isfollow:this.isfollow}
      if (f == 0) {
        this.http.post('api/login/follow',option,{}).subscribe((data)=>{
          console.log('关注');
          this.user.follownum++;
          window.localStorage.setItem('user',JSON.stringify(this.user))
          this.myfollow()
        })
        this.isfollow = 1;
      } else if (f == 1) {
        this.http.post('api/login/follow',option,{}).subscribe((data)=>{
          console.log('取消关注');
          this.user.follownum--;
          window.localStorage.setItem('user',JSON.stringify(this.user))
          this.clearmyfollow()
        })
        this.isfollow = 0;
      }
    }else{
      this.navCtrl.push(DengluPage);
    }
  }
  mylike(){
    if(window.localStorage.getItem('mylikes') && window.localStorage.getItem('mylikes')!='[]'){
      this.mylikes=JSON.parse(window.localStorage.getItem('mylikes'));
      this.mylikes.unshift([this.work,this.work_user]);//将喜欢的作品添加到喜欢列表的开始
      window.localStorage.setItem('mylikes',JSON.stringify(this.mylikes));
      console.log(this.mylikes_users)
    }else{
      this.mylikes.push([this.work,this.work_user]);
      window.localStorage.setItem('mylikes',JSON.stringify(this.mylikes));
      console.log(this.mylikes,window.localStorage.getItem('mylikes'));
    }
  }
  clearmylike(){
    for(var i=0;i<this.mylikes.length;i++){
      console.log(this.mylikes[i].work_id==this.work.work_id);
      if(this.mylikes[i][0].work_id==this.work.work_id){
        this.mylikes.splice(i,1);
      }
    }
    window.localStorage.setItem('mylikes',JSON.stringify(this.mylikes));
  }
  like(l) {
    console.log(this.work in this.mylikes)
    if (this.user ) {
      if (l == 0) {
        let option={mei_id:this.user.mei_id,bymei_id:this.work_user.mei_id,work_id:this.work['work_id'],islike:l}
        this.http.post('api/login/like',option,{}).subscribe((data)=>{
          console.log('点赞')
          this.work=data;
          this.changeimg();
        })
        this.mylike();
        this.islike = 1;
      } else if (l == 1) {
        let option={mei_id:this.user.mei_id,bymei_id:this.work_user.mei_id,work_id:this.work['work_id'],islike:l}
        this.http.post('api/login/like',option,{}).subscribe((data)=>{
          console.log('取消点赞');
          this.work=data;
          this.changeimg();
        })
        this.clearmylike()
        this.islike = 0;
      }
    }else if(!this.user){
      this.navCtrl.push(DengluPage);
    }
  }

  isstar=0;
  mystar(){
    if(window.localStorage.getItem('mystars') && window.localStorage.getItem('mystars')!='[]'){
      this.mystars=JSON.parse(window.localStorage.getItem('mystars'));
      this.mystars.unshift([this.work,this.work_user]);
      window.localStorage.setItem('mystars',JSON.stringify(this.mystars));
      console.log(this.mystars)
    }else{
      this.mystars.push([this.work,this.work_user]);
      window.localStorage.setItem('mystars',JSON.stringify(this.mystars));
      console.log(this.mystars,window.localStorage.getItem('mystars'));
    }
  }
  clearmystar(){
    for(var i=0;i<this.mystars.length;i++){
      console.log(this.mystars[i].work_id==this.work.work_id);
      if(this.mystars[i][0].work_id==this.work.work_id){
        this.mystars.splice(i,1);
      }
    }
    window.localStorage.setItem('mystars',JSON.stringify(this.mystars));
  }
  star(i){
    if (this.user) {
      let option={work_id:this.work['work_id'],isstar:this.isstar}
      if (i == 0) {
        this.http.post('api/login/star',option,{}).subscribe((data)=>{
          console.log('收藏')
          this.work=data;
          this.changeimg();
          this.mystar();
        })
        this.isstar = 1;
      } else if (i == 1) {
        this.http.post('api/login/star',option,{}).subscribe((data)=>{
          console.log('取消收藏')
          this.work=data;
          this.changeimg();
          this.clearmystar();
        })
        this.isstar = 0;
      }
    }else{
      this.navCtrl.push(DengluPage);
    }
  }

  goComment(){
    this.navCtrl.push(CommentPage);
  }
  goPa(i){
    this.viewCtrl.dismiss();
    this.navCtrl.push(PaPage,{work_user:this.relate_works[i][1],work:this.relate_works[i][0]})
  }
}
