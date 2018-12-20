import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpHeaders, HttpClient} from '@angular/common/http'
import { Data } from '../../provider/data';


@Component({
  selector: 'page-detail-event',
  templateUrl: 'detail-event.html',
})
export class DetailEventPage {
  id_event: number;
  id_user: number;
  detail: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: Data, public httpClient: HttpClient) {
    this.id_event = navParams.get('data');
    this.data.getData().then((data)=>
    {
      // this.id_user = data.id;
      // console.log(this.id_user);

      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+data.api_token
        })
      };

      console.log(this.id_event)

      this.httpClient.get(this.data.BASE_URL+'/detailEvent/'+this.id_event, httpOptions).subscribe(data =>{
       let response = data;
       this.detail = response;
       console.log(this.detail);

      });

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailEventPage');
  }

}
