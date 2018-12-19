import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {Data} from '../provider/data';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {IonicStorageModule} from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { TabmenuPage } from '../pages/tabmenu/tabmenu';
import { DetailPostingPage } from '../pages/detail-posting/detail-posting';
import { PostingPage } from '../pages/posting/posting';
import { EventPage } from '../pages/event/event';
import { ProfilPage } from '../pages/profil/profil';
import { DetailEventPage } from '../pages/detail-event/detail-event';
import { CreateEventPage } from '../pages/create-event/create-event';
import { MyReviewPage } from '../pages/my-review/my-review';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    TabmenuPage,
    DetailPostingPage,
    PostingPage,
    EventPage,
    ProfilPage,
    DetailEventPage,
    CreateEventPage,
    MyReviewPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    TabmenuPage,
    DetailPostingPage,
    PostingPage,
    EventPage,
    ProfilPage,
    DetailEventPage,
    CreateEventPage,
    MyReviewPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Data,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
