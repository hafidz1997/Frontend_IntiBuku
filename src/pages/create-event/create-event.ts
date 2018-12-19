import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EventPage } from '../event/event';

@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateEventPage');
  }

  ok(){
    this.nav.setRoot(EventPage)
  }

  cancel(){
    this.nav.pop()    
  }

}
