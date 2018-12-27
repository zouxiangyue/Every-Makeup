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
  works_tuijian=[];
  works_meizhuang=[];
  works_chuanda=[];
  works_xiangfen=[];
  works_hufu=[];
  works_jiansheng=[];
  works_other=[];
  ngOnInit() {
    this.http.get('api/home').subscribe(data=>{
      console.log(data);
      this.works=data;
      //console.log(this.works);
      for(var i=0;i<this.works.length;i++){
        this.works[i][0].img=(this.works[i][0].img).split(',')
        //console.log(this.works);
      }
      for(var j=0;j<this.works.length;j++){
        if(j<6){
          this.works_tuijian.push(this.works[j])
        }
        if(this.works[j][0].kind=='美妆类'){
          this.works_meizhuang.push(this.works[j])
        }else if(this.works[j][0].kind==='香氛类'){
          this.works_xiangfen.push(this.works[j])
        }else if(this.works[j][0].kind=='穿搭类'){
          this.works_chuanda.push(this.works[j])
        }else if(this.works[j][0].kind=='护肤类'){
          this.works_hufu.push(this.works[j])
        }else if(this.works[j][0].kind=='健身类'){
          this.works_jiansheng.push(this.works[j])
        }else{
          this.works_other.push(this.works[j])
        }
      }
      console.log(this.works_tuijian);
    })
  }
  goPa(i,k){
    if(k==0){
      this.navCtrl.push(PaPage,{work_user:this.works_tuijian[i][1],work:this.works_tuijian[i][0]});
    }else if(k==1){
      this.navCtrl.push(PaPage,{work_user:this.works_meizhuang[i][1],work:this.works_meizhuang[i][0]});
    }else if(k==2){
      this.navCtrl.push(PaPage,{work_user:this.works_chuanda[i][1],work:this.works_chuanda[i][0]});
    }else if(k==3){
      this.navCtrl.push(PaPage,{work_user:this.works_xiangfen[i][1],work:this.works_xiangfen[i][0]});
    }else if(k==4){
      this.navCtrl.push(PaPage,{work_user:this.works_hufu[i][1],work:this.works_hufu[i][0]});
    }else if(k==5){
      this.navCtrl.push(PaPage,{work_user:this.works_jiansheng[i][1],work:this.works_jiansheng[i][0]});
    }
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
