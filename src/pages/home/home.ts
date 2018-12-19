import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPostingPage } from '../detail-posting/detail-posting';
import { PostingPage } from '../posting/posting';

import { HttpHeaders, HttpClient} from '@angular/common/http'
import { Data } from '../../provider/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  id: string;
  datareview: any = [];
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
  
      this.httpClient.get(this.data.BASE_URL+'/getReview', httpOptions).subscribe(data =>{
       let response = data;
       this.datareview = response;
       console.log(this.datareview);
  
      });
  
    })
  }

  detail_posting(){
    this.nav.push(DetailPostingPage)
  }

  postingan(){
    this.nav.push(PostingPage)
  }

}
