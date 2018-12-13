import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MyPage } from '../my/my';
/**
 * Generated class for the DengluPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-denglu',
  templateUrl: 'denglu.html',
})
export class DengluPage {
  user_id:string='';
  user_pwd:string='';
  headers = new HttpHeaders({
    header:'hello login',
  });


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DengluPage');
  }

  goRegister() {
    this.navCtrl.push(RegisterPage)
  }
  goHome() {
    this.navCtrl.pop();
  };
  login() {
    if(!this.user_id){
      alert('用户名不能为空！')
    }else if(!this.user_pwd){
      alert('密码不能为空！');
    }else{
      this.http.post('/api/login',{
        user_id:this.user_id,
        user_pwd:this.user_pwd
      },{headers:this.headers}).subscribe((data)=>{
        console.log(data);
        if(data['status']==-1){
          alert('该用户未注册');
        }else if(data['status']==1){
          var userDetail=JSON.stringify(data) 
          //console.log('userDetail',userDetail);
          window.localStorage.setItem('user',userDetail);
          console.log(window.localStorage.getItem('user'));
          var callback = this.navParams.get('callback');  
          callback(data); //会返回登录的用户信息给MyPage;
          console.log('登录成功');
          this.navCtrl.pop();
        }else if(data['status']==-2){
          alert('该账号已被登录');
        }else{
          alert('登录失败，未知错误');
        }
      },(err)=>{
        console.log(err.message);
      })
    }
   // console.log('denglu')
  }

}
