import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';

@Injectable()
export class Data{
    public BASE_URL = 'http://localhost:8000/api';

    constructor(public httpClient : HttpClient, public storage : Storage) {

    }

    login(data_user:any, api_token){
        this.storage.set('data_user', data_user);
        this.storage.set('api_token', api_token);
    }

    getData(){
        return this.storage.get('data_user').then( (val) => {
          return val;
        });
      }
}