import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { PaPage } from '../pa/pa';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  search(){
    this.navCtrl.push(SearchPage);
  }
  goPa(){
    this.navCtrl.push(PaPage);
  }
}
