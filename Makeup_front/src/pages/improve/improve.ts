import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Alert, ActionSheetController } from 'ionic-angular';
import { AppShare } from '../../app/app.share';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  user = JSON.parse(window.localStorage.getItem('user'))
  profileModal_name = this.modalCtrl.create(ImprovenamePage);
  //profileModal_num=this.modalCtrl.create(ImprovenumberPage);
  profileModal_school = this.modalCtrl.create(ImproveschoolPage);
  profileModal_sex = this.modalCtrl.create(ImprovesexPage);
  profileModal_birthday = this.modalCtrl.create(ImprovebirthdayPage);
  profileModal_signature = this.modalCtrl.create(ImprovesignaturePage);
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public appShare: AppShare,
    public actionSheetCtrl: ActionSheetController,
    private http: HttpClient,
    private camera: Camera) {
    console.log(this.user);
    this.profileModal_name.onDidDismiss(data => {
      console.log(data.username);
      this.user.name = data.username;
      window.localStorage.setItem('user',JSON.stringify(this.user))
      console.log(window.localStorage.getItem('user')) 
        this.http.post('/api/improve/name', {
          mei_id: this.user.mei_id,
          name: this.user.name
        }, {}).subscribe(data => {
          console.log(data);
        })
    });
    this.profileModal_school.onDidDismiss(data => {
      console.log(data.userschool);
      this.user.school = data.userschool;
      window.localStorage.setItem('user',JSON.stringify(this.user))
      if (this.user) {
        this.http.post('api/improve/school', {
          mei_id: this.user.mei_id,
          school: this.user.school
        }, {}).subscribe(data => {
          console.log(data)
        })
      }
    });
    this.profileModal_sex.onDidDismiss(data => {
      console.log(data.usersex);
      this.user.sex = data.usersex;
      window.localStorage.setItem('user',JSON.stringify(this.user))
      if (this.user) {
        this.http.post('api/improve/sex', {
          mei_id: this.user.mei_id,
          sex: this.user.sex
        }, {}).subscribe(data => {
          console.log(data)
        })
      }
    });
    this.profileModal_birthday.onDidDismiss(data => {
      console.log(data.userbirthday);
      this.user.birthday = data.userbirthday;
      window.localStorage.setItem('user',JSON.stringify(this.user))
      if (this.user) {
        this.http.post('api/improve/birthday', {
          mei_id: this.user.mei_id,
          birthday: this.user.birthday
        }, {}).subscribe(data => {
          console.log(data)
        })
      }
    });
    this.profileModal_signature.onDidDismiss(data => {
      console.log(data.usersignature);
      this.user.signature = data.usersignature;
      window.localStorage.setItem('user',JSON.stringify(this.user))
      if (this.user) {
        this.http.post('api/improve/signature', {
          mei_id: this.user.mei_id,
          signature: this.user.signature
        }, {}).subscribe(data => {
          console.log(data)
        })
      }
    });
    // this.profileModal_num.onDidDismiss(data => {
    //   console.log(data.usernumber);
    //   this.usernumber=data.usernumber;
    //   console.log(this.usernumber);
    // });
  }
  mei_id = ''
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImprovePage');
    this.mei_id = JSON.parse(window.localStorage.getItem('user')).mei_id;
  }

  name() {
    this.profileModal_name.present();
  }
  // number(){
  //   this.profileModal_num.present();
  // }
  school() {
    this.profileModal_school.present();
  }
  sex() {
    this.profileModal_sex.present();
  }
  birthday() {
    this.profileModal_birthday.present();
  }
  signature() {
    this.profileModal_signature.present();
  }
  imgUrl = '../../assets/images/1.jpg';
  i: number = 0 //sourceType
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.i,//0表示调用camera
    allowEdit: true,//允许编辑
  }
  //拍照选择图片
  takePhoto() {
    this.i = 1;
    this.photo()
  };
  //从相册中选择图片
  getPhoto() {
    this.i = 2;
    this.photo()
  }
  clickHead() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '上传头像',
      buttons: [
        {
          text: '拍照',
          handler: () => {
            this.i = 1;
            this.photo()
          }
        },
        {
          text: '相册',
          handler: () => {
            this.i = 2;
            this.photo()
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            //actionSheet.dismiss();
          }
        }
      ]
    });
    actionSheet.present();
  }
  photo() {
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imgUrl = base64Image;
      this.user.headimg=this.imgUrl;
      window.localStorage.setItem('user',this.user)
      this.http.post('api/users', {
        headimg: this.imgUrl,
        mei_id: this.mei_id
      }, {}).subscribe(data => {
        console.log(data, '头像更改成功')
      }, err => {
        console.log(err.message);
      })
    }, (err) => {
      console.log(err.message)
    });
  }
}
