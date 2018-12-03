import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyFollowsPage } from './my-follows';

@NgModule({
  declarations: [
    MyFollowsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyFollowsPage),
  ],
})
export class MyFollowsPageModule {}
