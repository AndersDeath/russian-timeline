import {Component,OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'russian-timeline';
  currentLang = 'en';
  languages = [
    {
    title: 'English',
    code: 'en'
  },
  {
    title: 'Russian',
    code: 'ru'
  }
]
  public events: any[] = [];
  constructor(
    public translate: TranslateService
  ){
    translate.addLangs(['en', 'de', 'es']);
    translate.setDefaultLang(this.currentLang);
    translate.use(this.currentLang);
  }

  ngOnInit() {
      this.translate.use('en');
      this.events = [
          {status: 'Ordered', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0', image: 'game-controller.jpg'},
          {status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7'},
          {status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
          {status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
      ];
  }

  setLang(lang: string) {
    this.translate.use(lang);
  }
}
