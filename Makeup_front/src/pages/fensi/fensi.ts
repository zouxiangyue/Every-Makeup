import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// @IonicPage()
@Component({
  selector: 'page-fensi',
  templateUrl: 'fensi.html',
})
export class FensiPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FensiPage');
  }
  back(){
    this.navCtrl.pop();
  }
  change(e){
      if(e.target.value=='关注'){
        e.target.value='互关';
        e.target.style.backgroundColor='#C1B7B7';
      }else if(e.target.value=='互关'){
        e.target.value='关注';
        e.target.style.backgroundColor='#E17579';
      }
  }

  
}
