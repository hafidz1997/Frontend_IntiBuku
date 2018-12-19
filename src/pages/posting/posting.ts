import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-posting',
  templateUrl: 'posting.html',
})
export class PostingPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostingPage');
  }

  ok(){
    this.nav.setRoot(HomePage)
  }

  cancel(){
    this.nav.pop()    
  }

}
