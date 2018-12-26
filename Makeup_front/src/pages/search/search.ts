import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  input="";
  history=[];
  hot=['冬季时尚穿搭','枫叶妆','补水爽肤水','学生平价马丁靴','面试妆','秋冬穿搭必备神器'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  search(){
    if(this.input!=""){
      this.history.push(this.input);
      this.input="";
    }
  }
  clear(){
    this.history=[];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
}
