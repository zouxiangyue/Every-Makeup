import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FensiPage } from '../fensi/fensi';
import { DianzanPage } from '../dianzan/dianzan';
import { PinglunPage } from '../pinglun/pinglun';
import { AitePage } from '../aite/aite';
import { ModalController, ViewController } from 'ionic-angular';

// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public modalCtrl:ModalController,public navCtrl: NavController) {

  }
  gofensi(){
    this.navCtrl.push(FensiPage);
  }
  godianzan(){
    this.navCtrl.push(DianzanPage);
  }
  gopinglun(){
    this.navCtrl.push(PinglunPage);
  }
  goaite(){
    this.navCtrl.push(AitePage);
  }
  

}
