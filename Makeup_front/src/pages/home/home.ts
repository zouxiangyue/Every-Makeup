import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { SearchPage } from '../search/search';
import { PaPage } from '../pa/pa';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isActive=0;
  works;
  works_img;
  isClick(i){
    this.isActive =i;
  }
  constructor(public navCtrl: NavController,public http:HttpClient) {

  }
  add(){
    this.navCtrl.push(AddPage);
  }
  search(){
    this.navCtrl.push(SearchPage);
  }
  ngOnInit() {
    this.http.get('api/home').subscribe(data=>{
      console.log(data);
      this.works=data;
      //console.log(this.works);
      for(var i=0;i<this.works.length;i++){
        this.works[i][0].img=(this.works[i][0].img).split(',')
        console.log(this.works);
      }
      //console.log(this.works);
    })
  }
  goPa(i){
    this.navCtrl.push(PaPage,{work_user:this.works[i][1],work:this.works[i][0]});
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
