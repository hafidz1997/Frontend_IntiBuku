import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController, LoadingController} from "ionic-angular";
import { HttpHeaders, HttpClient} from '@angular/common/http'
import { Data } from '../../provider/data';


import {TabmenuPage} from "../tabmenu/tabmenu";
import { RegisterPage } from '../register/register';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: any;
  password: any;
  data_user: any;
  logins: any = [];

  constructor(public nav: NavController,
    public forgotCtrl: AlertController,
    public menu: MenuController,
    public toastCtrl: ToastController,
    public httpClient: HttpClient,
    public loadCtrl: LoadingController,
    private data : Data
) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
  let loading = this.loadCtrl.create({
      content: 'Tunggu sebentar...'
  });
  loading.present();
  let input = JSON.stringify({
    "username": this.username,
    "password": this.password });
  console.log(input);
  this.httpClient.post(this.data.BASE_URL+'/login', input, httpOptions).subscribe(data =>{
    let response = data;
    console.log(response);
    this.logins= response;
        this.data.login(this.logins.data_user, this.logins.data_user.api_token); // simpan response ke local storage
        this.nav.setRoot(TabmenuPage);
        loading.dismiss();  
  });
  }

  daftar(){
    this.nav.setRoot(RegisterPage);
  }
}
