import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPostingPage } from './detail-posting';

@NgModule({
  declarations: [
    DetailPostingPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailPostingPage),
  ],
})
export class DetailPostingPageModule {}
