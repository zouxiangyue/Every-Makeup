import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , DateTime } from 'ionic-angular';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }
  com_enpty=0;
  com_arr=[];
  com_txt;
  user = JSON.parse(window.localStorage.getItem('user'));
  comment(e){
    if(e.target.value){
      this.com_enpty=1;
      //console.log(1,e.target.value)
      if(e.keyCode==13){
        this.com();
       }
    }
    else{
      this.com_enpty=0;
      //console.log(0,e.target.value)
    }
  }
  iscom=false;
  com(){
    var d=new Date();
    var time=d.getMonth()+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()
    this.com_arr.push({
      com:this.com_txt,
      headimg:this.user.headimg,
      name:this.user.name,
      time:time
    })
    this.com_txt='';
    this.com_enpty=0;
    this.iscom=true;
  }
  ischange;
  likenum=8;
  like(e){
    if(e.target.id=='like'){
      e.target.style.color='#ff5151';
      e.target.id='islike';
      this.likenum++;
    }else{
      e.target.id='like';
      e.target.style.color='#000';
      this.likenum--;
    }
  }
}
