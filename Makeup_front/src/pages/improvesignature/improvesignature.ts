import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the ImprovesignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-improvesignature',
  templateUrl: 'improvesignature.html',
})
export class ImprovesignaturePage {
  data;
  user = JSON.parse(window.localStorage.getItem('user'))
  usersignature=this.user.usersignature;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImprovesignaturePage');
  }
  keep(){
    this.data={usersignature:this.usersignature};
    this.viewCtrl.dismiss(this.data);
  }
}
