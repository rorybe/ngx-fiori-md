import { Component } from '@angular/core';
import { TranslateService } from './core/services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-fiori-md';

  constructor(private translate: TranslateService) {
    translate.use('en');
  }
}

