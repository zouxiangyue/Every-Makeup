import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { PaPage } from '../pa/pa';
import { TopicPage } from '../topic/topic';
import { TopictripPage } from '../topictrip/topictrip';
import { TopicdatePage } from '../topicdate/topicdate';
import { TopicdailyPage } from '../topicdaily/topicdaily';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
     var topics=[{img:'../../assets/images/面试.jpeg',title:'面试',content:'留下美好初印象',follownum:7},
                 {img:'../../assets/images/旅行.jpeg',title:'旅行',content:'记录回忆足迹',follownum:6},
                 {img:'../../assets/images/约会.jpeg',title:'约会',content:'珍惜相处时光',follownum:4},
                 {img:'../../assets/images/img13.jpg',title:'日常',content:'开心生活每一天',follownum:1}
          ];
window.localStorage.setItem('topics',JSON.stringify(topics));
}
  search(){
    this.navCtrl.push(SearchPage);
  }
  goPa(){
    this.navCtrl.push(PaPage);
  }
  goTopic(){
    this.navCtrl.push(TopicPage);
  }
  goTopictrip(){
    this.navCtrl.push(TopictripPage);
  }
  goTopicdate(){
    this.navCtrl.push(TopicdatePage);
  }
  goTopicdaily(){
    this.navCtrl.push(TopicdailyPage);
  }
}
