import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpHeaders, HttpClient} from '@angular/common/http'
import { Data } from '../../provider/data';


@Component({
  selector: 'page-detail-posting',
  templateUrl: 'detail-posting.html',
})
export class DetailPostingPage {
  id_review: number;
  id_user: number;
  detail: any;
  komen: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: Data, public httpClient: HttpClient) {
    this.id_review = navParams.get('data');
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

      console.log(this.id_review)

      this.httpClient.get(this.data.BASE_URL+'/detailReview/'+this.id_review, httpOptions).subscribe(data =>{
       let response = data;
       this.detail = response;
       console.log(this.detail);

      });

      this.httpClient.get(this.data.BASE_URL+'/getKomentar/'+this.id_review, httpOptions).subscribe(data =>{
        let response = data;
        this.komen = response;
        console.log(this.komen);
 
       });

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPostingPage');
  }

  
}
