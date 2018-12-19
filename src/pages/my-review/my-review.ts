import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPostingPage } from '../detail-posting/detail-posting';

/**
 * Generated class for the MyReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-review',
  templateUrl: 'my-review.html',
})
export class MyReviewPage {

  constructor(public navCtrl: NavController,public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyReviewPage');
  }
  detail_posting(){
    this.nav.push(DetailPostingPage)
  }
}
