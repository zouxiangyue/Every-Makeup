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
  phone='';
  school='';
  userdata='';
  headers = new HttpHeaders({
    header:'hello register',
  });
  httpPost;
  register(){
    if(!this.name){
      alert('昵称不能为空');
    }else if(!this.pwd){
      alert('密码不能为空');
    }else if(!this.phone){
      alert('手机号不能为空');
    }else if(!this.school){
      alert('学校不能为空');
    }else{
      if(this.phone.length==11 && /\d{11}/g.test(this.phone)){
        this.http.post('/api/register', {
          name: this.name,
          pwd: this.pwd,
          phone: this.phone,
          school: this.school,
        }, { headers: this.headers }).subscribe(data => {
          console.log(data);
          if (data['status'] == -2) {
            alert('手机号已被注册');
            this.phone='';
          } else if(data['status'] == 0) {
            alert('注册成功');
            var callback = this.navParams.get('callback');
            callback(data); 
            this.navCtrl.pop();
          }
        }, err => {
          console.log(err.message);
        });
        
      }else{
        alert('输入手机号不符合规定');
      }
    };

  }
  goHome(){
    this.navCtrl.pop();
  }

}
