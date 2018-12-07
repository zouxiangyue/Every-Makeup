import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';



/**
 * Generated class for the WreleasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-wrelease',
  templateUrl: 'wrelease.html',
})
export class WreleasePage {
  type="beauty";
  content;

  imgUrl:string;
  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.imgUrl=base64Image;
    }, (err) => {
     // Handle error
    });
  }

  constructor(private camera: Camera,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WreleasePage');
  }
  cancel(){
    this.navCtrl.popToRoot();
  }
   
  Publish(){     
    console.log(this.content);
    var beauty=document.getElementById('beauty');
    var wear=document.getElementById('wear');
    var skin=document.getElementById('skin');
    var perfume=document.getElementById('perfume');
    var sport=document.getElementById('sport');
    var other=document.getElementById('other');

    console.log(beauty.getAttribute('checked'));
    if(Boolean(beauty.getAttribute('checked'))==true){
      console.log('美妆类'); 
      this.type='beauty';
    }else if(Boolean(wear.getAttribute('checked'))==true){
      console.log('穿搭类'); 
      this.type='wear';
    }else if(Boolean(skin.getAttribute('checked'))==true){
      console.log('护肤类'); 
      this.type='skin';
    }else if(Boolean(perfume.getAttribute('checked'))==true){
      console.log('香氛类'); 
      this.type='perfume';
    }else if(Boolean(sport.getAttribute('checked'))==true){
      console.log('健身类'); 
      this.type='sport';
    }else if(Boolean(other.getAttribute('checked'))==true){
      console.log('其他'); 
      this.type='other';
    }
  
    //发布帖子
    //内容不为空
    if(this.content&&this.content.trim() != ''){ 
      let alert = this.alertCtrl.create({
        title: '发布成功!' 
      });
      alert.present();
    }
    //内容为空
    else{
      let tip = this.alertCtrl.create({
        title: '还没有写内容哦~~~'
      });
      tip.present();
    }
  }

}
