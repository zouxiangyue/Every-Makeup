import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DengluPage } from '../denglu/denglu';
import { HttpClient,HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  name='';
  pwd='';
  email_or_phone='';
  email='';
  phone='';
  school='';
  headers = new HttpHeaders({
    header:'hello register',
  });
  httpPost;
  register(){
    if(!this.name){
      alert('昵称不能为空');
    }else if(!this.pwd){
      alert('密码不能为空');
    }else if(!this.email_or_phone){
      alert('邮箱/手机号不能为空');
    }else if(!this.school){
      alert('学校不能为空');
    }else{
     // console.log(this.email_or_phone);
      if(this.email_or_phone.length==11 && /\d{11}/g.test(this.email_or_phone)){
        this.phone=this.email_or_phone;
        this.email='';
        console.log(this.phone)
      }else if(/\d+@{1}/.test(this.email_or_phone)){
        this.email=this.email_or_phone;
        this.phone=''; 
        console.log(this.email);
      }else{
        alert('输入的邮箱或手机号不符合规定');
        this.email_or_phone='';
        this.email='';
        this.phone='';
      }
      //console.log(this.name,this.pwd,this.email,this.school);
      if (this.phone || this.email) {
        this.http.post('/api/register', {
          name: this.name,
          pwd: this.pwd,
          email: this.email,
          phone: this.phone,
          school: this.school,
        }, { headers: this.headers }).subscribe(data => {
          console.log(data);
          if (data['status'] == -2) {
            alert('邮箱或手机号已被注册');
            this.email_or_phone='';
          } else if(data['status'] == 0) {
            alert('注册成功');
            this.navCtrl.push(DengluPage);
          }
        }, err => {
          console.log(err.message);
        });
      }
    };

  }
  goHome(){
    this.navCtrl.pop();
  }

}
