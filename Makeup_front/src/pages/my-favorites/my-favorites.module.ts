import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyFavoritesPage } from './my-favorites';

@NgModule({
  declarations: [
    MyFavoritesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyFavoritesPage),
  ],
})
export class MyFavoritesPageModule {}
