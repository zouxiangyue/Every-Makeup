import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }
  user=JSON.parse(window.localStorage.getItem('user'));
  feedback_txt='';
  phone='';
  feedback(){
    var d=new Date();
    var dm= d.getMonth()<10 ? '0'+(d.getMonth()+1):d.getMonth()+1+'';
    var dd=d.getDate()<10 ? '0'+d.getDate():d.getDate()+'';
    var dh=d.getHours()<10 ? '0'+d.getHours():d.getHours()+'';
    var dmi=d.getMinutes()<10 ? '0'+d.getMinutes():d.getMinutes()+'';
    var ds=d.getSeconds()<10 ? '0'+d.getSeconds():d.getSeconds()+''
    var time=dm+'-'+dd+' '+dh+':'+dmi;
    this.http.post('/api/login/feedback',{mei_id:this.user.mei_id,feedback:this.feedback_txt,phone:this.phone,name:this.user.name,time:time}).subscribe(data=>{
      console.log(data);
      alert('您的反馈我们已经收到')
    })
    this.navCtrl.popToRoot()
  }
}
