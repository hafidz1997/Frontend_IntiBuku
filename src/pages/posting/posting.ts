import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpHeaders, HttpClient} from '@angular/common/http'
import { Data } from '../../provider/data';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-posting',
  templateUrl: 'posting.html',
})
export class PostingPage {
id: number;
judul: string;
judul2: string;
penulis: string;
isi: string;
detail: string;


  constructor(public nav: NavController, public navParams: NavParams, public data: Data, public httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostingPage');
  }


  cancel(){
    this.nav.pop()    
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
      "judul": this.judul,
      "judul2": this.judul2,
      "pengarang": this.penulis,
      "isi": this.isi,
      "detail": this.detail,
      });
  
      console.log(input);
  
        this.httpClient.post(this.data.BASE_URL+'/tambahReview/'+data.id, input, httpOptions).subscribe(data =>{
          let response = data;
          console.log(response);
              this.nav.setRoot(HomePage);
        });
    })
  
    }
  
}
