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
  names=[{name:'Canna',img:"../../assets/images/img1.jpg",note_num:12,fan_num:16},
         {name:'Jon',img:"../../assets/images/img2.jpg",note_num:58,fan_num:12},
         {name:'Jack',img:"../../assets/images/img3.jpg",note_num:68,fan_num:460}];
  follows=[{name:'梅子熟了',img:"../../assets/images/img4.jpg",note_num:20,fan_num:456},
    {name:'雨夜',img:"../../assets/images/img5.jpg",note_num:23,fan_num:34},
    {name:'听见你说',img:"../../assets/images/img6.jpg",note_num:12,fan_num:58}];
  
  names2=[{name:'约会话题',img:"../../assets/images/约会.jpeg",note_num:16,fan_num:46},
          {name:'旅行话题',img:"../../assets/images/旅行.jpeg",note_num:22,fan_num:34}];
  follows2=[
    {name:'面试话题',img:"../../assets/images/面试.jpeg",note_num:25,fan_num:26},
    {name:'日常话题',img:"../../assets/images/img13.jpg",note_num:14,fan_num:24}
  ];
  arr=[];
  // change(index,done){
  //   if(done){
  //     let unfollow=this.follows[index];
  //     this.names.push(this.follows)
  //   }
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFollowsPage');
  }

  active(b){
    this.isActive=b;
  }

}
