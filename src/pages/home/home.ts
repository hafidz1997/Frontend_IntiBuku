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

  constructor(public navCtrl: NavController,public httpClient: HttpClient, public data : Data) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+data.api_token
      })
    };

    this.httpClient.get(this.data.BASE_URL+'/getReview'+ data, httpOptions).subscribe(data =>{
      let response = data;
      console.log(response);
    });
  }

  detail_posting(){
    this.navCtrl.push(DetailPostingPage)
  }

  postingan(){
    this.navCtrl.push(PostingPage)
  }

}
