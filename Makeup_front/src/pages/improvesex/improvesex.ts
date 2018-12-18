import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

/**
 * Generated class for the ImprovesexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-improvesex',
  templateUrl: 'improvesex.html',
})
export class ImprovesexPage {
  data;
  user = JSON.parse(window.localStorage.getItem('user'))
  usersex=this.user.sex;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImprovesexPage');
  }
  keepsex(sex){
    console.log(sex);
    this.usersex=sex;
    console.log(this.usersex);
  }

  keep(sex){
    this.data={usersex:this.usersex};
    this.viewCtrl.dismiss(this.data);
  }
}
