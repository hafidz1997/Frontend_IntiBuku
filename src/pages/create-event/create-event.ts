import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpHeaders, HttpClient} from '@angular/common/http'
import { Data } from '../../provider/data';
import { EventPage } from '../event/event';

@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {
  id: number;
  nama: string;
  waktu: string;
  tempat: string;
  deskripsi: string;


  constructor(public nav: NavController, public navParams: NavParams, public data: Data, public httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateEventPage');
  }

  submit(){

    this.data.getData().then((data)=>
    {
      console.log(data);
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ data.api_token
        })
      };
  
      let input = JSON.stringify({
      "nama": this.nama,
      "waktu": this.waktu,
      "tempat": this.tempat,
      "deskripsi": this.deskripsi,
      });
  
      console.log(input);
  
        this.httpClient.post(this.data.BASE_URL+'/tambahEvent/'+data.id, input, httpOptions).subscribe(data =>{
          let response = data;
          console.log(response);
          this.nav.setRoot(EventPage);
        });
    })
  
    }

  cancel(){
    this.nav.pop()    
  }

}
