import { Component } from '@angular/core';
import { HomePage } from "../home/home";
import { EventPage } from '../event/event';
import { ProfilPage } from '../profil/profil';

@Component({
  selector: 'page-tabmenu',
  templateUrl: 'tabmenu.html',
})
export class TabmenuPage {

  tab1 = HomePage;
  tab2 = EventPage;
  tab3 = ProfilPage;
}
