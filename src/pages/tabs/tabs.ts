import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FipePage } from '../fipe/fipe';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FipePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
