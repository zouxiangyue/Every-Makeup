import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FensiPage } from '../fensi/fensi';
import { DianzanPage } from '../dianzan/dianzan';
import { PinglunPage } from '../pinglun/pinglun';
import { AitePage } from '../aite/aite';
import { ModalController, ViewController } from 'ionic-angular';
import { SixinPage } from '../sixin/sixin';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public modalCtrl:ModalController,public navCtrl: NavController,public http: HttpClient) {

  }
  user;
  myfans
  ionViewWillEnter(){
    console.log(123)
    this.user=JSON.parse(window.localStorage.getItem('user'));
    this.myfans=JSON.parse(window.localStorage.getItem('myfans'))
    this.http.post('api/login/myfans',{mei_id:this.user.mei_id}).subscribe(data=>{
      console.log(123)
      console.log(data);
      this.myfans=data;
    })
  }
  gofensi(){
    this.navCtrl.push(FensiPage);
  }
  godianzan(){
    this.navCtrl.push(DianzanPage);
  }
  gopinglun(){
    this.navCtrl.push(PinglunPage);
  }
  goaite(){
    this.navCtrl.push(AitePage);
  }
  goSixin(){
    this.navCtrl.push(SixinPage);
  }
  

}
