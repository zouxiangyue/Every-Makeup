import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { DengluPage } from '../denglu/denglu'
/**
 * Generated class for the MyFollowsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-follows',
  templateUrl: 'my-follows.html',
})
export class MyFollowsPage {
  
  
  isActive:boolean=true;

  // change(index,done){
  //   if(done){
  //     let unfollow=this.follows[index];
  //     this.names.push(this.follows)
  //   }
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient) {
  }
  myfollows;
  interest_users;
  user;
  topics;
  tui_topics;
  mytopics;
  ionViewWillEnter(){
    this.user=JSON.parse(window.localStorage.getItem('user'));
    this.myfollows=JSON.parse(window.localStorage.getItem('myfollows')) || [];
    this.http.post('api/login/interest',{myfollows:this.myfollows}).subscribe(data=>{
      this.interest_users=data;
      console.log(data,this.interest_users);
      for(var i=0;i<this.interest_users.length;i++){
        if(this.interest_users[i].mei_id==this.user.mei_id){
          this.interest_users.splice(i,1);
        }
      }
    })
   // window.localStorage.removeItem('mytopics')
    //window.localStorage.removeItem('tui_topics')
    this.topics=JSON.parse(window.localStorage.getItem('topics'))
    console.log(this.topics)
    this.tui_topics=JSON.parse(window.localStorage.getItem('tui_topics')) || this.topics;
    this.mytopics=JSON.parse(window.localStorage.getItem('mytopics')) || [];
    console.log(this.tui_topics,this.mytopics)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFollowsPage');
  }

  active(b){
    this.isActive=b;
  }
  myfollow(user,i){
    if(window.localStorage.getItem('myfollows') && window.localStorage.getItem('myfollows')!='[]'){
      this.myfollows=JSON.parse(window.localStorage.getItem('myfollows'));
      this.myfollows.unshift(user);//将关注好友到关注列表
      window.localStorage.setItem('myfollows',JSON.stringify(this.myfollows));
      console.log(this.myfollows);
      this.interest_users.splice(i,1);
    }else{
      this.myfollows.push(user);
      window.localStorage.setItem('myfollows',JSON.stringify(this.myfollows));
      console.log(this.myfollows,window.localStorage.getItem('myfollows'));
      this.interest_users.splice(i,1);
    }
  }
  clearmyfollow(i){
    this.interest_users.push(this.myfollows[i]);
    this.myfollows.splice(i,1);
    window.localStorage.setItem('myfollows',JSON.stringify(this.myfollows));
  }

  follow(k,i) {
   // console.log(k,i)
    if (this.user) {
      if ( k== '关注') {
       // console.log(k,i)
        var option={mei_id:this.user.mei_id,bymei_id:this.interest_users[i].mei_id,isfollow:0}
        this.http.post('api/login/follow',option,{}).subscribe((data)=>{
          console.log('关注');
          this.user.follownum++;
          window.localStorage.setItem('user',JSON.stringify(this.user))
          this.myfollow(this.interest_users[i],i)
        })
      } else if (k == '已关注') {
        //console.log(k,i)
        var option={mei_id:this.user.mei_id,bymei_id:this.myfollows[i].mei_id,isfollow:1}
        this.http.post('api/login/follow',option,{}).subscribe((data)=>{
          console.log('取消关注');
          this.user.follownum--;
          window.localStorage.setItem('user',JSON.stringify(this.user))
          this.clearmyfollow(i)
        })
      }
    }else{
      this.navCtrl.push(DengluPage);
    }
  }
  
  follow_t(e,i){
    if(e=='关注'){
      console.log('关注')
      this.tui_topics[i].follownum++;
      this.mytopics.unshift(this.tui_topics[i]);
      this.tui_topics.splice(i,1);
      window.localStorage.setItem('tui_topics',JSON.stringify(this.tui_topics));
      window.localStorage.setItem('mytopics',JSON.stringify(this.mytopics))
    }else if(e=='已关注'){
      console.log('已关注')
      this.mytopics[i].follownum--;
      this.tui_topics.push(this.mytopics[i]);
      this.mytopics.splice(i,1);
      window.localStorage.setItem('tui_topics',JSON.stringify(this.tui_topics));
      window.localStorage.setItem('mytopics',JSON.stringify(this.mytopics))
    }
  }
}
