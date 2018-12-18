import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ImprovePage } from '../improve/improve';

/**
 * Generated class for the ImprovenamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-improvename',
  templateUrl: 'improvename.html',
})
export class ImprovenamePage {
  data;
  user = JSON.parse(window.localStorage.getItem('user'))
  username=this.user.name;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImprovenamePage');
  };

 keep(){
   console.log(this.username)
   this.data={username:this.username};
   this.viewCtrl.dismiss(this.data);
 }
}
