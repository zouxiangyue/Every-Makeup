import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-taolun',
  templateUrl: 'taolun.html',
})
export class TaolunPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  com_txt;

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaolunPage');
  }

  isSomething(){
   console.log(123)
    var callback=this.navParams.get('callback');
    console.log(this.com_txt);
    callback(this.com_txt);
    this.navCtrl.pop();
  }

}
