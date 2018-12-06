import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPostingPage } from '../detail-posting/detail-posting';
import { PostingPage } from '../posting/posting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  detail_posting(){
    this.navCtrl.push(DetailPostingPage)
  }

  postingan(){
    this.navCtrl.push(PostingPage)
  }

}
