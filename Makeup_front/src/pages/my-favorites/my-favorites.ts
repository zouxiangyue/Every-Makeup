import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaPage } from '../pa/pa';
/**
 * Generated class for the MyFavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-favorites',
  templateUrl: 'my-favorites.html',
})
export class MyFavoritesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFavoritesPage');
  }
  user;
  mystars;
  ionViewWillEnter(){
    this.user=JSON.parse(window.localStorage.getItem('user'));
    this.mystars=JSON.parse(window.localStorage.getItem('mystars')) || [];
    console.log(this.mystars);
  }
  goPa(i){
    console.log(i,this.mystars[i])
      this.navCtrl.push(PaPage,{work_user:this.mystars[i][1],work:this.mystars[i][0]});
  }
}
