import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DengluPage } from '../denglu/denglu';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MyPage } from '../my/my';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root;
user
  constructor(public navCtrl:NavController) {
    console.log(window.localStorage.getItem('user'))
this.user=window.localStorage.getItem('user')
  }
  goDenglu(){
    if(this.user){
      this.tab4Root=MyPage;
    }else{
      this.tab4Root=DengluPage;
    }
  }
 
}
