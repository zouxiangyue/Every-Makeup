import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the DianzanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dianzan',
  templateUrl: 'dianzan.html',
})
export class DianzanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }
  user;
  likes;
  ionViewWillEnter(){
    this.user=JSON.parse(window.localStorage.getItem('user'));
    this.http.post('api/login/mylikes',{mei_id:this.user.mei_id}).subscribe(data=>{
      this.likes=data;
      console.log(this.likes);
      for(var i=0;i<this.likes.length;i++){
        this.likes[i][0].img=(this.likes[i][0].img).split(',')
      }
      console.log(this.likes);
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DianzanPage');
  }

}
