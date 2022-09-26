import { EN_TRANSLATION } from './i18n/en';
import { RU_TRANSLATION } from './i18n/ru';
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
    translate.setTranslation('ru', RU_TRANSLATION);
    translate.setTranslation('en', EN_TRANSLATION);
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang(this.currentLang);
    translate.use(this.currentLang);
  }

  ngOnInit() {
      const colors = {
        putin: '#9C27B0',
        murdering: "#cc0000",
        protests: "#7FA172"
      }
      this.translate.use('en');
      this.events = [
        {
          title: 'events.item-2.title', date:  'events.item-2.date', icon: PrimeIcons.CIRCLE, color: colors.murdering
        },
        {
          title: 'events.item-3.title', date:  'events.item-3.date', icon: PrimeIcons.STAR_FILL, color: colors.protests
        },
          {
            title: 'events.item-1.title', date:  'events.item-1.date', icon: PrimeIcons.HOME, color: colors.putin
          },
      ];
  }

  setLang(lang: string) {
    this.translate.use(lang);
  }
}
