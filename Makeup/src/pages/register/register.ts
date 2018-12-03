import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DengluPage } from '../denglu/denglu';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  name='';
  password='';
  email='';
  school='';
  input(name,email,password,school){
    this.navCtrl.push(DengluPage,{name:this.name,password:this.password,email:this.email,school:this.school}); 
         
  }
  goHome(){
    this.navCtrl.pop();
  }

}
