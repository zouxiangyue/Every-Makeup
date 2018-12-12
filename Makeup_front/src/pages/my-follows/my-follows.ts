import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  names=[{name:'Canna',img:"../../assets/images/img1.jpg"},
         {name:'Jon',img:"../../assets/images/img2.jpg"},
         {name:'Jack',img:"../../assets/images/img3.jpg"}];
  follows=[{name:'梅子熟了',img:"../../assets/images/img4.jpg",note_num:20,fan_num:456},
    {name:'雨夜',img:"../../assets/images/img5.jpg",note_num:23,fan_num:34},
    {name:'听见你说',img:"../../assets/images/img6.jpg",note_num:12,fan_num:58}];
  
  names2=[{name:'护肤话题',img:"../../assets/images/img27.jpg"},
          {name:'健身话题',img:"../../assets/images/img28.jpg"},
          {name:'香氛话题',img:"../../assets/images/img24.jpg"}];
  follows2=[
    {name:'穿搭话题',img:"../../assets/images/淘淘淘.jpg",note_num:265,fan_num:346},
    {name:'美妆话题',img:"../../assets/images/img25.jpg",note_num:124,fan_num:1246}
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFollowsPage');
  }

  active(b){
    this.isActive=b;
  }

}
