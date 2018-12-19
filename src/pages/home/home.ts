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
  datareview: any;
  temporary: any;
  coba: any;
  dt:any = [];

  constructor(public data: Data, public nav: NavController, public httpClient: HttpClient) {
   this.getData()
  }

  getData(){
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
       this.datareview = this.datareview.review;
       console.log(this.datareview);
  
      });
  
    })
  }

  detail_posting(id_review : number){
    this.nav.push(DetailPostingPage, {data:id_review})
  }

  postingan(){
    this.nav.push(PostingPage)
  }

  getItems(query){
    var query = query.target.value;
    console.log(query)
    if(query && query.trim() != ''){

      this.datareview = this.datareview.filter((data) => {
        // console.log(data)
        return ((data.judul_buku.toLowerCase().indexOf(query.toLowerCase()) > -1))
      })
    }
    else{
      this.getData()
    }
  }

}
