import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// @IonicPage()
@Component({
  selector: 'page-fensi',
  templateUrl: 'fensi.html',
})
export class FensiPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }
  myfans;
  user;
  myfollows;
  isfollow=[];
  ionViewWillEnter(){
   // console.log(123)
    this.user=JSON.parse(window.localStorage.getItem('user'));
    this.myfollows=JSON.parse(window.localStorage.getItem('myfollows')) || [];
    this.myfans=JSON.parse(window.localStorage.getItem('myfans')) || [];
    this.http.post('api/login/myfans',{mei_id:this.user.mei_id}).subscribe(data=>{
      console.log(data);
      this.myfans=data;
      console.log(this.myfans,this.myfollows);
      for(var i=0;i<this.myfans.length;i++){
        this.isfollow[i]=this.myfans.length+1;
        for(var j=0;j<this.myfollows.length;j++){
            console.log(this.myfans[i][0].mei_id==this.myfollows[j].mei_id)
             if(this.myfans[i][0].mei_id==this.myfollows[j].mei_id){
                   this.isfollow[i]=-(i+1);
                    break;
              }else if(j==this.myfollows.length-1){
                this.isfollow[i]=i+1;
              }
        }
        console.log(this.isfollow)
      }
      console.log(this.isfollow)
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FensiPage');
    
  }
  back(){
    this.navCtrl.pop();
  }
   myfollow(user,i){
    if(window.localStorage.getItem('myfollows') && window.localStorage.getItem('myfollows')!='[]'){
      this.myfollows=JSON.parse(window.localStorage.getItem('myfollows'));
      this.myfollows.unshift(user);//将好友到关注列表
      window.localStorage.setItem('myfollows',JSON.stringify(this.myfollows));
      console.log(this.myfollows);
    }else{
      this.myfollows.push(user);
      window.localStorage.setItem('myfollows',JSON.stringify(this.myfollows));
      console.log(this.myfollows,window.localStorage.getItem('myfollows'));
    }
  }
  clearmyfollow(i){
    this.myfollows.splice(i,1);
    window.localStorage.setItem('myfollows',JSON.stringify(this.myfollows));
  }
  change(e,i){
      if(e==0){
         var option={mei_id:this.user.mei_id,bymei_id:this.myfans[i].mei_id,isfollow:0}
        this.http.post('api/login/follow',option,{}).subscribe((data)=>{
          console.log('关注');
          this.user.follownum++;
          window.localStorage.setItem('user',JSON.stringify(this.user))
          this.myfollow(this.myfans[i],i)
        })
       this.isfollow[i]=-i-1;
      }else if(e==1){
         var option={mei_id:this.user.mei_id,bymei_id:this.myfans[i].mei_id,isfollow:1}
        this.http.post('api/login/follow',option,{}).subscribe((data)=>{
          console.log('取消关注');
          this.user.follownum--;
          window.localStorage.setItem('user',JSON.stringify(this.user))
          this.clearmyfollow(i)
        })
        this.isfollow[i]=i+1;
      }
  }

  
}
