import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

/**
 * Generated class for the ImproveschoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-improveschool',
  templateUrl: 'improveschool.html',
})
export class ImproveschoolPage {
  data;
  user = JSON.parse(window.localStorage.getItem('user'))
  userschool=this.user.school;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImproveschoolPage');
  }
  keep(){
    this.data={userschool:this.userschool};
    this.viewCtrl.dismiss(this.data);
  }
}
