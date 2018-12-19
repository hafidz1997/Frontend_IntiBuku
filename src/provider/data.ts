import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';

@Injectable()
export class Data{
    public BASE_URL = 'http://localhost:8000/api';

    public HAS_LOGGED_IN = 'status_login';

    constructor(public httpClient: HttpClient, public storage: Storage) {

    }

    login(data_user:any, api_token){
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.storage.set('data_user', data_user);
        this.storage.set('api_token', api_token);
    }

    logout() {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('data_user');
        this.storage.remove('api_token');
      };
    
    isLogin(){
        return this.storage.get(this.HAS_LOGGED_IN).then((val)=>{
          return val;
        });
      }
    
    getRole(){
        return this.storage.get('api_token').then((val)=>{
          return val;
        });
      }

    getData(){
        return this.storage.get('data_user').then( (val) => {
          return val;
        });
      }
}