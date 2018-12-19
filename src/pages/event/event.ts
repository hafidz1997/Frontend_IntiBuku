import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetailEventPage } from '../detail-event/detail-event';
import { CreateEventPage } from '../create-event/create-event';


@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  detail_event(){
    this.nav.push(DetailEventPage);
  }

  create_event(){
    this.nav.push(CreateEventPage);
  }

}
