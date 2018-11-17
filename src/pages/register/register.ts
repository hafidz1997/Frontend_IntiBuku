import { Component } from '@angular/core';
import {NavController, AlertController, ToastController, MenuController, LoadingController} from "ionic-angular";
import { LoginPage } from '../login/login';
import { HttpHeaders, HttpClient} from '@angular/common/http'
import { Data } from '../../provider/data';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json' //'Authorization': 'Bearer '+data.api_token
    })
  };

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  nama : any;
  username: any;
  email : any;
  password: any;

  data_user: any;
  register: any = [];

  constructor(
    public nav: NavController,
              public forgotCtrl: AlertController,
              public menu: MenuController,
              public toastCtrl: ToastController,
              public httpClient: HttpClient,
              public loadCtrl: LoadingController,
              private data : Data,
              public client: HttpClient
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  daftar(){

    let loading = this.loadCtrl.create({
    content: 'Tunggu sebentar...'
     });
    loading.present();

    let input = JSON.stringify({
      "nama": this.nama,
      "username": this.username,
      "email": this.email,
      "password": this.password
    });
    console.log(input);
    this.httpClient.post(this.data.BASE_URL+'/register', input, httpOptions).subscribe(data =>{
      let response = data;
      console.log(response);
      // this.register= response;
      //     this.data.register(this.register.data_user, this.register.data_user.api_token); // simpan response ke local storage
          this.nav.setRoot(LoginPage);
          loading.dismiss();  
   
  });
  }

  login(){
    this.nav.setRoot(LoginPage);
  }

}
