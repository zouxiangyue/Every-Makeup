import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TysetPage } from './tyset';

@NgModule({
  declarations: [
    TysetPage,
  ],
  imports: [
    IonicPageModule.forChild(TysetPage),
  ],
})
export class TysetPageModule {}
