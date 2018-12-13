import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the ImprovenumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-improvenumber',
  templateUrl: 'improvenumber.html',
})
export class ImprovenumberPage {
data;
usernumber;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImprovenumberPage');
  }

  keep(){
    this.data={usernumber:this.usernumber};
    this.viewCtrl.dismiss(this.data);
  }

}
