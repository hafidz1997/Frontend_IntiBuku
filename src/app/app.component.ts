import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabmenuPage } from '../pages/tabmenu/tabmenu';

import {Data} from '../provider/data';

// import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public data: Data) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    //Session
    this.data.isLogin().then((val)=>{
      console.log("session check", val)
      if(val){
        this.rootPage = TabmenuPage;
      } else {
         this.rootPage = LoginPage;
      }    
    });
  }
}

