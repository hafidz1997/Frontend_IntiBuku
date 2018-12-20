import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailEventPage } from '../detail-event/detail-event';
import { CreateEventPage } from '../create-event/create-event';


import { HttpHeaders, HttpClient} from '@angular/common/http'
import { Data } from '../../provider/data';


@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  id: string;
  dataevent: any = [];
  coba: any;
  dt:any = [];

  constructor(public data: Data, public nav: NavController, public httpClient: HttpClient) {
    this.data.getData().then((data)=>
    {
  
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+data.api_token
        })
      };
  
      this.httpClient.get(this.data.BASE_URL+'/getEvent', httpOptions).subscribe(data =>{
       let response = data;
       this.dataevent = response;
       console.log(this.dataevent);
  
      });
  
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  detail_event(id_event : number){
    this.nav.push(DetailEventPage, {data:id_event});
  }

  create_event(){
    this.nav.push(CreateEventPage);
  }

}
