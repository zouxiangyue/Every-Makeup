import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { ImprovenamePage } from '../improvename/improvename';
//import { ImprovenumberPage } from '../improvenumber/improvenumber';
import { ImproveschoolPage } from '../improveschool/improveschool';
import { ImprovesexPage } from '../improvesex/improvesex';
import { ImprovebirthdayPage } from '../improvebirthday/improvebirthday';
import { ImprovesignaturePage } from '../improvesignature/improvesignature';

/**
 * Generated class for the ImprovePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-improve',
  templateUrl: 'improve.html',
})
export class ImprovePage {
  username;
  //usernumber;
  userschool;
  usersex;
  userbirthday;
  usersignature;
  profileModal_name=this.modalCtrl.create(ImprovenamePage);
  //profileModal_num=this.modalCtrl.create(ImprovenumberPage);
  profileModal_school=this.modalCtrl.create(ImproveschoolPage);
  profileModal_sex=this.modalCtrl.create(ImprovesexPage);
  profileModal_birthday=this.modalCtrl.create(ImprovebirthdayPage);
  profileModal_signature=this.modalCtrl.create(ImprovesignaturePage);
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
      this.profileModal_name.onDidDismiss(data => {
        console.log(data.username);
        this.username=data.username;
      });
      this.profileModal_school.onDidDismiss(data => {
        console.log(data.userschool);
        this.userschool=data.userschool;
      });
      this.profileModal_sex.onDidDismiss(data => {
        console.log(data.usersex);
        this.usersex=data.usersex;
      });
      this.profileModal_birthday.onDidDismiss(data => {
        console.log(data.userbirthday);
        this.userbirthday=data.userbirthday;
      });
      this.profileModal_signature.onDidDismiss(data => {
        console.log(data.usersignature);
        this.usersignature=data.usersignature;
      });
      // this.profileModal_num.onDidDismiss(data => {
      //   console.log(data.usernumber);
      //   this.usernumber=data.usernumber;
      //   console.log(this.usernumber);
      // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImprovePage');
  }

  name(){
    this.profileModal_name.present();
  }
  // number(){
  //   this.profileModal_num.present();
  // }
  school(){
    this.profileModal_school.present();
  }
  sex(){
    this.profileModal_sex.present();
  }
  birthday(){
    this.profileModal_birthday.present();
  }
  signature(){
    this.profileModal_signature.present();
  }
}
