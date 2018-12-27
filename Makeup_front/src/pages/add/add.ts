import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,App} from 'ionic-angular';
import { WreleasePage } from '../wrelease/wrelease';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,public appCtrl: App) {
  }

  close(){
    this.navCtrl.pop();
  }

  write(){
    this.viewCtrl.dismiss();
    this.navCtrl.push(WreleasePage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
