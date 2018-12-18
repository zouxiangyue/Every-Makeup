import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DengluPage} from '../denglu/denglu';
/**
 * Generated class for the ManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage',
  templateUrl: 'manage.html',
})
export class ManagePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  user=JSON.parse(window.localStorage.getItem('user'));
  manageusers=JSON.parse(window.localStorage.getItem('manageusers'));
  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagePage');
    console.log(this.user);
    console.log(this.manageusers)
  }
  addUser(){
    var data: Object = {
      callback: data => {
        console.log(data);
        //this.user = JSON.parse(window.localStorage.getItem('user'));
      }}
    this.navCtrl.push(DengluPage,data);
  }
}
