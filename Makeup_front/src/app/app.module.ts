import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { RegisterPage } from '../pages/register/register';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DengluPage } from '../pages/denglu/denglu';
import { MyPage } from '../pages/my/my';
import { ImprovePage } from '../pages/improve/improve';
import { GuidePage } from '../pages/guide/guide';
import { MyFollowsPage } from '../pages/my-follows/my-follows';
import { MyFavoritesPage } from '../pages/my-favorites/my-favorites';
import { ClearPage } from '../pages/clear/clear';
import { PrivacyPage } from '../pages/privacy/privacy';
import { FeedbackPage } from '../pages/feedback/feedback';
import { SetPage } from '../pages/set/set';
import { AboutmeiPage } from '../pages/aboutmei/aboutmei';
import { AddPage } from '../pages/add/add';
import { WreleasePage } from '../pages/wrelease/wrelease';
import { ManagePage} from '../pages/manage/manage';
import { SecurityPage} from '../pages/security/security';
import { XxsetPage} from '../pages/xxset/xxset';
import { TysetPage} from '../pages/tyset/tyset';
import { Camera} from '@ionic-native/camera';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FensiPage } from '../pages/fensi/fensi';
import { DianzanPage } from '../pages/dianzan/dianzan';
import { PinglunPage } from '../pages/pinglun/pinglun';
import { AitePage } from '../pages/aite/aite';
import { SearchPage } from '../pages/search/search';
import { PaPage } from '../pages/pa/pa';
import { AppShare } from './app.share';
import { SixinPage } from '../pages/sixin/sixin';
import { ImprovenamePage } from '../pages/improvename/improvename';
import { ImprovenumberPage } from '../pages/improvenumber/improvenumber';
import { ImproveschoolPage } from '../pages/improveschool/improveschool';
import { ImprovesexPage } from '../pages/improvesex/improvesex';
import { ImprovebirthdayPage } from '../pages/improvebirthday/improvebirthday';
import { ImprovesignaturePage } from '../pages/improvesignature/improvesignature';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyPage,
    GuidePage,
    DengluPage,
    MyFollowsPage,
    MyFavoritesPage,
    ClearPage,
    PrivacyPage,
    FeedbackPage,
    SetPage,
    AddPage,
    WreleasePage,
    AboutmeiPage,
    RegisterPage,
    ImprovePage,
    FensiPage,
    DianzanPage,
    PinglunPage,
    AitePage,
    SearchPage,
    SixinPage,
    ManagePage,
    SecurityPage,
    XxsetPage,
    TysetPage,

    PaPage,
    ImprovenamePage,
    ImprovenumberPage,
    ImproveschoolPage,
    ImprovesexPage,
    ImprovebirthdayPage,
    ImprovesignaturePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{
        backButtonText: '',
        tabsHideOnSubPages:'true'
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyPage,
    GuidePage,
    DengluPage,
    MyFollowsPage,
    MyFavoritesPage,
    ClearPage,
    AboutmeiPage ,
    PrivacyPage,
    FeedbackPage,
    SetPage,
    AddPage,
    WreleasePage ,
    RegisterPage,
    ImprovePage,
    FensiPage,
    DianzanPage,
    PinglunPage,
    AitePage,
    SearchPage,
    SixinPage,
    ManagePage,
    SecurityPage,
    XxsetPage,
    TysetPage,

    PaPage,
    ImprovenamePage,
    ImprovenumberPage,
    ImproveschoolPage,
    ImprovesexPage,
    ImprovebirthdayPage,
    ImprovesignaturePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppShare,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
