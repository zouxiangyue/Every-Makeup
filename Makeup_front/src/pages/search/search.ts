import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ViewController,App} from 'ionic-angular';
import { PaPage } from '../pa/pa';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  input="";
  history=JSON.parse(window.localStorage.getItem('history')) || [];
  hot=['冬季时尚穿搭','枫叶妆','补水爽肤水','学生平价马丁靴','面试妆','秋冬穿搭必备神器'];
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }
  sql_works;
  search_works=[];
  issearch=false;
  iscome=true;
  ngOnInit() {
    this.history=JSON.parse(window.localStorage.getItem('history')) || [];
    this.sql_works=JSON.parse(window.localStorage.getItem('sql_works'));
    console.log(this.history,JSON.parse(window.localStorage.getItem('history')))
  }
  search(){
    if(this.input!=""){
      for(var i=0;i<this.sql_works.length;i++){
        console.log(this.sql_works[i][0].title.search(this.input))
        if(this.sql_works[i][0].title.search(this.input)>=0){
          this.search_works.push(this.sql_works[i]);
        }
      }
      if(this.search_works.length>0){
        this.issearch=false;
        this.iscome=false;
        this.history.push(this.input);
        window.localStorage.setItem('history',JSON.stringify(this.history))
        this.history=JSON.parse(window.localStorage.getItem('history'))
        for(var i=0;i<this.search_works.length;i++){
          this.search_works[i][0].img=(this.search_works[i][0].img).split(',')
        }
      }else{
        console.log(123)
        this.iscome=false;
        this.issearch=true;
      }
    }
    this.input="";
  }
  goPa(i){
    this.navCtrl.push(PaPage,{work_user:this.search_works[i][1],work:this.search_works[i][0]});
    this.viewCtrl.dismiss();
  }
  clear(){
    this.history=[];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
}
