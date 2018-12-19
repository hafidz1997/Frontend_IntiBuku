import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MyReviewPage } from '../my-review/my-review';
import { HttpHeaders, HttpClient} from '@angular/common/http'
import { Data } from '../../provider/data';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  id: string;
  profil: any = [];

  constructor(public data: Data, public httpClient: HttpClient, public alertCtrl: AlertController, public nav: NavController, public navParams: NavParams) {
    this.getData()
  }

  getData(){
    this.data.getData().then((data)=>
    {
      this.id = data.id;
      console.log(this.id);
  
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+data.api_token
        })
      };
  

      this.httpClient.get(this.data.BASE_URL+'/getProfil/' + data.id, httpOptions).subscribe(data =>{
        let response = data;
        this.profil = response;
        console.log(this.profil);
  
      });
  
    })
  }

  logout(){
    this.data.logout();
    this.nav.setRoot(LoginPage);
  }


  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Change Email Address',
      message: "Change your e-mail address below",
      inputs: [
        {
          name: 'Type new email address',
          placeholder: 'Type new email address'
        },
        {
          name: 'Retype new email address',
          placeholder: 'Retype new email address'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  

  doPromptPass() {
    let prompt = this.alertCtrl.create({
      title: 'Change Password',
      message: "Change your password below",
      inputs: [
        {
          name: 'Type your current password',
          placeholder: 'Type your current password'
        },
        {
          name: 'Type new password',
          placeholder: 'Type new password'
        },
        {
          name: 'Retype new password',
          placeholder: 'Retype new password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }
  my_review(){
    this.nav.push(MyReviewPage)
  }
}
