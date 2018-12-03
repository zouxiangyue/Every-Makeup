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
  names=['Canna','Jon','Jack'];
  follows=[{name:'昵称1',note_num:23,fan_num:3456},
    {name:'昵称1',note_num:23,fan_num:3456},
    {name:'昵称1',note_num:23,fan_num:3456}];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFollowsPage');
  }

  active(b){
    this.isActive=b;
  }

}
