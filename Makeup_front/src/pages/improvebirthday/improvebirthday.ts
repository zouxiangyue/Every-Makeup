import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the ImprovebirthdayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-improvebirthday',
  templateUrl: 'improvebirthday.html',
})
export class ImprovebirthdayPage {
  data;
  user = JSON.parse(window.localStorage.getItem('user'))
  userbirthday=this.user.birthday;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImprovebirthdayPage');
  }
  keep(){
    console.log(this.userbirthday)
    this.data={userbirthday:this.userbirthday};
    this.viewCtrl.dismiss(this.data);
  }
}
