import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { SearchPage } from '../search/search';
import { PaPage } from '../pa/pa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isActive=0;
  isClick(i){
    this.isActive =i;
  }
  constructor(public navCtrl: NavController) {

  }
  add(){
    this.navCtrl.push(AddPage);
  }
  search(){
    this.navCtrl.push(SearchPage);
  }

  goPa(){
    this.navCtrl.push(PaPage);
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
