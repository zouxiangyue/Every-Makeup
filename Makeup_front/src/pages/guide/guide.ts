import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { DengluPage } from '../denglu/denglu';
import { RegisterPage } from '../register/register';
@IonicPage()
@Component({
  selector: 'page-guide',
  templateUrl: 'guide.html',
})
export class GuidePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

goTabs(){
  this.navCtrl.setRoot(TabsPage);
}
}
